import { useEffect, useState } from "react";
import cn from "../../../locale/cn/tech_cn.json";
import en from "../../../locale/en/tech_en.json";
import my from "../../../locale//my/tech_my.json";
import type {
  LanguageTypes,
  LocaleSettingType,
  ModeTypes,
} from "../../../types/state.types";
import styles from "./Tech.module.css";
import { TechImageDisplay } from "./techImageDisplay/TechImageDisplay";

type ContentType = {
  tech: string;
};

type TechProps = {
  mode: ModeTypes;
  languageDetect: LanguageTypes;
};

const localeSetting: LocaleSettingType<ContentType> = {
  en,
  cn,
  my,
};

export function Tech({ mode, languageDetect }: TechProps) {
  const header = localeSetting[languageDetect].tech;
  const [description, setDescription] = useState<string>(header);

  useEffect(() => {
    setDescription(header);
  }, [header]);

  return (
    <section className={styles.container} id="tech">
      <header>{description}</header>

      <div className={styles.limit}>
        <TechImageDisplay
          mode={mode}
          header={header}
          setDescription={setDescription}
        />
      </div>
    </section>
  );
}
