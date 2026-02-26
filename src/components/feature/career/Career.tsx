import { useEffect, useState } from "react";
import amber from "../../../assets/career/amber.svg";
import figurelab from "../../../assets/career/figurelab.png";
import ge from "../../../assets/career/ge.svg";
import cn from "../../../locale/cn/career_cn.json";
import en from "../../../locale/en/career_en.json";
import my from "../../../locale//my/career_my.json";
import type {
  LanguageTypes,
  LocaleSettingType,
  ModeTypes,
} from "../../../types/state.types";
import styles from "./Career.module.css";

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

type ImagesType = "amber" | "figurelab" | "ge";

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
  ge,
};

export function Career({ languageDetect }: CareerProps) {
  const [logo, setLogo] = useState<ImagesType | null>(null);
  const [showMore, setShowMore] = useState<boolean>(false);
  const [content, setContent] = useState<ContentType["items"]>(
    localeSetting[languageDetect].items,
  );

  useEffect(() => {
    const toShow = showMore
      ? localeSetting[languageDetect].items
      : localeSetting[languageDetect].items.slice(0, 2);
    setContent(toShow);
  }, [showMore, languageDetect]);

  return (
    <section className={styles.container}>
      <div className={styles.upperlimit}>
        <header>{localeSetting[languageDetect].title}</header>
        {logo && <img src={imageSettings[logo]} alt={logo} />}
      </div>
      <div className={styles.middlelimit}>
        {content.map((obj) => (
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
        <button
          type="button"
          className="button-as-div"
          onClick={() => setShowMore((prev) => !prev)}
        >
          <p>{showMore ? "Show Less" : "Show More"}</p>
        </button>
      </div>
    </section>
  );
}
