import { useEffect, useState } from "react";
import amber from "../../../assets/career/amber.svg";
import figurelab from "../../../assets/career/figurelab.png";
import ge from "../../../assets/career/ge.svg";
import cn from "../../../locale/cn/career_cn.json";
import uicn from "../../../locale/cn/ui_cn.json";
import en from "../../../locale/en/career_en.json";
import uien from "../../../locale/en/ui_en.json";
import my from "../../../locale//my/career_my.json";
import uimy from "../../../locale//my/ui_my.json";
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

type UiContentType = {
  showmore: string;
  showless: string;
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

const uiLocaleSetting: LocaleSettingType<UiContentType> = {
  en: uien,
  cn: uicn,
  my: uimy,
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
            <h2>{obj.company}</h2>
            <div className={styles.subHeading}>
              <h4>{obj.position}</h4>
              <h4>{obj.duration}</h4>
            </div>
            <ul>
              {obj.description.map((x) => (
                <li key={x.slice(0, 5).trim()}>{x}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <footer>
        <button
          type="button"
          className="button-as-button standard-hover"
          onClick={() => setShowMore((prev) => !prev)}
        >
          <p>
            {showMore
              ? uiLocaleSetting[languageDetect].showless
              : uiLocaleSetting[languageDetect].showmore}
          </p>
        </button>
      </footer>
    </section>
  );
}
