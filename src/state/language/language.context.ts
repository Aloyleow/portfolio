import { createContext, type Dispatch, type SetStateAction } from "react";
import type { LanguageTypes } from "../../types/state.types";

type LanguageContextType = {
  languageDetect: LanguageTypes;
  setLanguageDetect: Dispatch<SetStateAction<LanguageTypes>>;
  setUserSelect: Dispatch<SetStateAction<boolean>>;
};

export const LanguageContext = createContext<LanguageContextType | null>(null);
