import { useContext } from "react";
import { ModeContext } from "./mode.context";

export function useMode() {
  const context = useContext(ModeContext);

  if (!context) {
    throw new Error("Mode setting missing");
  }

  return context;
}
