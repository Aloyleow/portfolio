import cn from "../../../locale/cn/project_cn.json";
import en from "../../../locale/en/project_en.json";
import my from "../../../locale/my/project_my.json";
import type {
  LanguageTypes,
  LocaleSettingType,
  ModeTypes,
} from "../../../types/state.types";
import styles from "./Project.module.css";

type ContentType = {
  title: string;
  items: {
    index: string;
    name: string;
    images: string[];
    tech: string[];
    description: string[];
    link: string;
    githublink: string[];
  }[];
};

const localeSetting: LocaleSettingType<ContentType> = {
  en,
  cn,
  my,
};

type ProjectProps = {
  mode: ModeTypes;
  languageDetect: LanguageTypes;
};

export function Project({ mode, languageDetect }: ProjectProps) {
  return (
    <section className={styles.container}>
      <header>{localeSetting[languageDetect].title}</header>
    </section>
  );
}
