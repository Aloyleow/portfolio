import { useContext } from "react";
import { PopperContext } from "./poppers.context";

export function usePoppers() {
  const context = useContext(PopperContext);

  if (!context) {
    throw new Error("Popper conditions missing");
  }

  return context;
}
