import { uiLocaleSettings } from "../../../locale";
import { useLanguage } from "../../../state/language/useLanguage";
import type { LanguageTypes } from "../../../types/state.types";
import { PoppingPopperOfPoppies } from "../../ui/popper/PoppingPopperOfPoppies";
import { PopperBackButton } from "../../ui/popperBackButton/PopperBackButton";
import styles from "./LangSelection.module.css";

export function LangSelection() {
  const { languageDetect, setLanguageDetect } = useLanguage();

  const languages: Record<string, LanguageTypes> = {
    English: "en",
    中文: "cn",
    Melayu: "my",
  };

  return (
    <PoppingPopperOfPoppies>
      <header className={styles.upperlimit}>
        <h2>{uiLocaleSettings[languageDetect].language}</h2>
      </header>
      <div className={styles.middlelimit}>
        {Object.entries(languages).map(([key, value]) => (
          <button
            key={key}
            type="button"
            className={`button-as-div standard-hover`}
            onClick={() => setLanguageDetect(value)}
          >
            {key}
          </button>
        ))}
      </div>
      <footer className={styles.lowerlimit}>
        <PopperBackButton />
      </footer>
    </PoppingPopperOfPoppies>
  );
}
