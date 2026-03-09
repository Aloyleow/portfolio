import { useState } from "react";
import dnav from "../../../assets/icons/dark/binoculars-d.svg";
import nav from "../../../assets/icons/light/binoculars.svg";
import cn from "../../../locale/cn/navigation_cn.json";
import en from "../../../locale/en/navigation_en.json";
import my from "../../../locale/my/navigation_my.json";
import type {
  LanguageTypes,
  LocaleSettingType,
  ModeTypes,
  ThemeSettingType,
} from "../../../types/state.types";
import styles from "./Navigation.module.css";

type ContentType = {
  home: string;
  tech: string;
  work: string;
  proj: string;
  contact: string;
};

const themeSetting: ThemeSettingType<"nav"> = {
  light: {
    nav,
  },
  dark: {
    nav: dnav,
  },
};

const localeSetting: LocaleSettingType<ContentType> = {
  en,
  cn,
  my,
};

type NavigationProps = {
  mode: ModeTypes;
  languageDetect: LanguageTypes;
};

export function Navigation({ mode, languageDetect }: NavigationProps) {
  const [show, setShow] = useState<boolean>(false);
  const navigationList = [
    {
      label: localeSetting[languageDetect].home,
      link: "#home",
    },
    {
      label: localeSetting[languageDetect].tech,
      link: "#tech",
    },
    {
      label: localeSetting[languageDetect].proj,
      link: "#project",
    },
    {
      label: localeSetting[languageDetect].work,
      link: "#career",
    },
    {
      label: localeSetting[languageDetect].contact,
      link: "#contact",
    },
  ];

  return (
    <nav
      className={`${styles.container} ${show ? styles.superblur : ""}`}
      onMouseLeave={() => setShow(false)}
    >
      <button
        type="button"
        className={`button-as-div ${styles.imageHolder}`}
        onMouseEnter={() => setShow(true)}
        onFocus={() => setShow(true)}
      >
        <img src={themeSetting[mode].nav} alt="nav" className={styles.image} />
      </button>
      {show && (
        <div>
          <ul>
            {navigationList.map((x) => (
              <li key={x.link}>
                <a href={x.link} onClick={() => setShow(false)}>
                  {x.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
