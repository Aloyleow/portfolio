import { type ReactNode, useEffect, useState } from "react";
import type { ModeTypes } from "../../types/state.types";
import { ModeContext } from "./mode.context";

/**
 * TODO(Urgent)
 *
 * Check userSettignsDark
 */
export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ModeTypes>("light");
  const [userSelect, setUserSelect] = useState<boolean>(false);

  const supportedModes: ModeTypes[] = ["dark", "light"] as const;

  useEffect(() => {
    console.log("Mode provider effect test");
    const root = document.documentElement;

    if (!userSelect) {
      const userSettingsDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

      if (userSettingsDark) {
        setMode("light");
      }
    }

    for (const x of supportedModes) {
      root.classList.remove(x);
    }
    root.classList.add(mode);
  }, [mode, userSelect, supportedModes]);

  return (
    <ModeContext.Provider value={{ mode, setMode, userSelect, setUserSelect }}>
      {children}
    </ModeContext.Provider>
  );
}
