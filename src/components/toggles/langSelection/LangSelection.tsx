import cn from "../../../locale/cn/ui_cn.json";
import en from "../../../locale/en/ui_en.json";
import my from "../../../locale/my/ui_my.json";
import { useLanguage } from "../../../state/language/useLanguage";
import type {
  LanguageTypes,
  LocaleSettingType,
} from "../../../types/state.types";
import { PoppingPopperOfPoppies } from "../../ui/popper/PoppingPopperOfPoppies";
import { PopperBackButton } from "../../ui/popperBackButton/PopperBackButton";
import styles from "./LangSelection.module.css";

type ContentType = {
  language: string;
};

const localeSetting: LocaleSettingType<ContentType> = {
  en,
  cn,
  my,
};

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
        <h2>{localeSetting[languageDetect].language}</h2>
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
