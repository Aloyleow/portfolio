import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import dnav from "../../../assets/icons/dark/binoculars-d.svg";
import dhome from "../../../assets/icons/dark/home-d.svg";
import nav from "../../../assets/icons/light/binoculars.svg";
import home from "../../../assets/icons/light/home.svg";
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

const themeSetting: ThemeSettingType<"nav" | "home"> = {
  light: {
    nav,
    home,
  },
  dark: {
    nav: dnav,
    home: dhome,
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
  const location = useLocation();
  const useHome = location.pathname !== "/";
  const [show, setShow] = useState<boolean>(false);
  const homeNavList = [
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

  return useHome ? (
    <nav
      className={`${styles.container} ${show ? styles.superblur : ""}`}
      onMouseLeave={() => setShow(false)}
    >
      <Link className={`${styles.imageHolder} hover`} to="/">
        <img
          src={themeSetting[mode].home}
          alt="home"
          className={`${styles.image} standard-hover`}
        />
      </Link>
    </nav>
  ) : (
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
            {homeNavList.map((x) => (
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
