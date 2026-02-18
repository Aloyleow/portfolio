import { type ReactNode, useEffect, useState } from "react";
import type { LanguageTypes } from "../../types/state.types";
import { LanguageContext } from "./language.context";

type LanguageProviderProps = {
  children: ReactNode;
};
/**
 * TODO(LOW)
 *
 * Can consider persisting language settings even when
 * user refresh or leave site
 *  */
export function LanguageProvider({ children }: LanguageProviderProps) {
  const [languageDetect, setLanguageDetect] = useState<LanguageTypes>("en");
  const [userSelect, setUserSelect] = useState<boolean>(false);

  const supportedLanguages: LanguageTypes[] = ["en", "cn", "my"] as const;

  useEffect(() => {
    const userDefaultLang = supportedLanguages.find(
      (lang) => navigator.language === lang,
    );

    if (!userSelect && userDefaultLang) {
      setLanguageDetect(userDefaultLang);
    }
    console.log("Language provider effect test");
  }, [userSelect, supportedLanguages]);

  return (
    <LanguageContext.Provider
      value={{ languageDetect, setLanguageDetect, setUserSelect }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
