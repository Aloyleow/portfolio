import cn from "../../../locale/cn/intro_cn.json";
import en from "../../../locale/en/intro_en.json";
import my from "../../../locale//my/intro_my.json";
import type {
  LanguageTypes,
  LocaleSettingType,
} from "../../../types/state.types";
import styles from "./Introduction.module.css";

type ContentType = {
  name: string;
  role: string;
  iam: string;
};

const localeSetting: LocaleSettingType<ContentType> = {
  en,
  cn,
  my,
};

type IntroductionProps = {
  // mode: ModeTypes;
  languageDetect: LanguageTypes;
};

export function Introduction({ languageDetect }: IntroductionProps) {
  return (
    <section className={styles.container} id="home">
      <div className={styles.limit}>
        <header>
          <h1>{localeSetting[languageDetect].name}</h1>
        </header>
        <main>
          <h1>{localeSetting[languageDetect].role}</h1>
        </main>
        <footer>
          <p>{localeSetting[languageDetect].iam}</p>
        </footer>
      </div>
    </section>
  );
}
