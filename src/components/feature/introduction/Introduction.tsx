import cn from "../../../locale/cn/intro_cn.json";
import en from "../../../locale/en/intro_en.json";
import my from "../../../locale//my/intro_my.json";
import type {
  LanguageTypes,
  LocaleSettingType,
} from "../../../types/state.types";
import styles from "./Introduction.module.css";
import { useState } from "react";
import { getServerTime } from "../../../utils/server/what-is-my-ip";

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
  const [test, setTest] = useState<string>("Nothing yet")
  return (
    <section className={styles.container} id="home">
      <div className={styles.limit}>
        <header>
          <h1>{localeSetting[languageDetect].name}</h1>
        </header>
        <main>
          <h1>{localeSetting[languageDetect].role}</h1>
          <h1>{test}</h1>
          <button type="button" onClick={async () => setTest(await getServerTime({ data: { }}))}>Click</button>
        </main>
        <footer>
          <p>{localeSetting[languageDetect].iam}</p>
        </footer>
      </div>
    </section>
  );
}
