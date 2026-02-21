/// <reference types="vite/client" />

import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import { LanguageProvider } from "../state/language/LanguageProvider";
import { ModeProvider } from "../state/mode/ModeProvider";
import { PoppersProvider } from "../state/poppers/PoppersProvider";
import globalCss from "../styles/global.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Aloysious Leow Porfolio",
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <LanguageProvider>
        <ModeProvider>
          <PoppersProvider>
            <Outlet />
          </PoppersProvider>
        </ModeProvider>
      </LanguageProvider>
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href={globalCss} />
        <HeadContent />
      </head>
      <body id="root">
        {children}
        <Scripts />
      </body>
    </html>
  );
}
