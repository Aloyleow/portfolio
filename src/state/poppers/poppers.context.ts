import { createContext, type Dispatch, type SetStateAction } from "react";
import type { PopperTypes } from "../../types/state.types";

type PopperContextType = {
  popper: PopperTypes;
  setPopper: Dispatch<SetStateAction<PopperTypes>>;
};

export const PopperContext = createContext<PopperContextType | null>(null);
