/// <reference types="vite/client" />

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { Footer } from "../components/feature/footer/Footer";
import { requestLogger } from "../middleware/server";
import { LanguageProvider } from "../state/language/LanguageProvider";
import { ModeProvider } from "../state/mode/ModeProvider";
import { PoppersProvider } from "../state/poppers/PoppersProvider";
import globalCss from "../styles/global.css?url";
import { RootLayout } from "./-rootlayout";

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
  server: {
    middleware: [requestLogger],
  },
});

const queryClient = new QueryClient();

function RootComponent() {
  return (
    <RootDocument>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <ModeProvider>
            <PoppersProvider>
              <Toaster />
              <RootLayout />
              <Outlet />
              <Footer />
            </PoppersProvider>
          </ModeProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href={globalCss} />
        <link rel="icon" href="/favicon.png" />
        <HeadContent />
      </head>
      <body id="root">
        {children}
        <Scripts />
      </body>
    </html>
  );
}
