import { useState } from "react";
import amber from "../../../assets/career/amber.svg";
import figurelab from "../../../assets/career/figurelab.png";
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
    image: string;
    company: string;
    position: string;
    duration: string;
    tech: string[];
    description: string[];
  }[];
};

type ImagesType = "amber" | "figurelab";

type CareerProps = {
  mode: ModeTypes;
  languageDetect: LanguageTypes;
};

const localeSetting: LocaleSettingType<ContentType> = {
  en,
  cn,
  my,
};

const imageSettings: Record<ImagesType, string> = {
  amber,
  figurelab,
};

export function Career({ mode, languageDetect }: CareerProps) {
  const [logo, setLogo] = useState<ImagesType | null>(null);
  return (
    <section className={styles.container}>
      <header>{localeSetting[languageDetect].title}</header>
      <div className={styles.limit}>
        {localeSetting[languageDetect].items.map((obj) => (
          // biome-ignore lint/a11y/noStaticElementInteractions: <Ridiculous to make this a button>
          <div
            key={obj.index}
            onMouseEnter={() => setLogo(obj.image as ImagesType)}
            onMouseLeave={() => setLogo(null)}
          >
            <div>
              <h2>{obj.company}</h2>
            </div>
            <div className={styles.subHeading}>
              <h4>{obj.position}</h4>
              <h4>{obj.duration}</h4>
            </div>
            <div>
              <ul>
                {obj.description.map((x) => (
                  <li key={x.slice(0, 5).trim()}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div>
        {logo && <img src={imageSettings[logo]} alt={logo} height={40} />}
      </div>
    </section>
  );
}
