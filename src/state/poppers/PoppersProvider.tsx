import { type ReactNode, useState } from "react";
import type { PopperTypes } from "../../types/state.types";
import { PopperContext } from "./poppers.context";

export function PoppersProvider({ children }: { children: ReactNode }) {
  const [popper, setPopper] = useState<PopperTypes>({
    RESUME: false,
    LANGUAGE: false,
  });

  return (
    <PopperContext.Provider value={{ popper, setPopper }}>
      {children}
    </PopperContext.Provider>
  );
}
