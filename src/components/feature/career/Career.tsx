import cn from "../../../locale/cn/career_cn.json";
import en from "../../../locale/en/career_en.json";
import my from "../../../locale//my/career_my.json";
import type {
  LanguageTypes,
  LocaleSettingType,
  ModeTypes,
} from "../../../types/state.types";
import styles from "./Career.module.css";
import { CareerRoadDisplay } from "./careerRoadDisplay/CareerRoadDisplay";

type ContentType = {
  title: string;
  items: {
    index: string;
    company: string;
    position: string;
    duration: string;
    tech: string[];
    description: string[];
  }[];
};

type CareerProps = {
  mode: ModeTypes;
  languageDetect: LanguageTypes;
};

const localeSetting: LocaleSettingType<ContentType> = {
  en,
  cn,
  my,
};

export function Career({ mode, languageDetect }: CareerProps) {
  return (
    <section className={styles.container}>
      <header>{localeSetting[languageDetect].title}</header>
      <div className={styles.limit}>
        <CareerRoadDisplay />
      </div>
    </section>
  );
}
