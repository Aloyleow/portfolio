import cn from "../../../locale/cn/project_cn.json";
import en from "../../../locale/en/project_en.json";
import my from "../../../locale/my/project_my.json";
import type {
  LanguageTypes,
  LocaleSettingType,
  ModeTypes,
} from "../../../types/state.types";
import { ImageCarousel } from "./imageCarousel/ImageCarousel";
import styles from "./Project.module.css";

type ContentType = {
  title: string;
  items: {
    index: string;
    name: string;
    images: string[];
    tech: string[];
    description: string[];
    link: {
      button: string;
      url: string;
    };
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
      <main className={styles.middlelimit}>
        {localeSetting[languageDetect].items.map((item) => (
          <article key={item.index}>
            <h3>{item.name}</h3>
            <ImageCarousel
              imagesToShow={item.images}
              key={item.index}
              mode={mode}
            />
            <ul>
              {item.description.map((dec) => (
                <li key={dec.slice(0, 8).trim()}>{dec}</li>
              ))}
            </ul>
            <a href={item.link.url} target="_blank" rel="noopener noreferrer">
              {item.link.button}
            </a>
          </article>
        ))}
      </main>
    </section>
  );
}
