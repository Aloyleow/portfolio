import { createContext, type Dispatch, type SetStateAction } from "react";
import type { ModeTypes } from "../../types/state.types";

type ModeContextType = {
  mode: ModeTypes;
  setMode: Dispatch<SetStateAction<ModeTypes>>;
  userSelect: boolean;
  setUserSelect: Dispatch<SetStateAction<boolean>>;
};

export const ModeContext = createContext<ModeContextType | null>(null);
