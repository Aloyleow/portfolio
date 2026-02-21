import { useState } from "react";
import dgithub from "../../../assets/icons/dark/github-d.svg";
import dlinkedin from "../../../assets/icons/dark/linkedin-d.svg";
import dresume from "../../../assets/icons/dark/resume-d.svg";
import github from "../../../assets/icons/light/github.svg";
import linkedin from "../../../assets/icons/light/linkedin.svg";
import resume from "../../../assets/icons/light/resume.svg";
import { useMode } from "../../../state/mode/useMode";
import { usePoppers } from "../../../state/poppers/usePoppers";
import type { ModeTypes } from "../../../types/state.types";
import type { TypePeeker } from "../../../types/utility.types";
import styles from "./Administrative.module.css";
import { rotateImageBaseOnIndex } from "./Administrative.style";

type AdminImages = "github" | "linkedin" | "resume";
type ThemeSettingType = Record<
  ModeTypes,
  TypePeeker<Record<AdminImages, string>>
>;
type RouteSettingType = Record<AdminImages, string | null>;

const themeSetting: ThemeSettingType = {
  light: {
    github,
    linkedin,
    resume,
  },
  dark: {
    github: dgithub,
    linkedin: dlinkedin,
    resume: dresume,
  },
};

const routeSettings: RouteSettingType = {
  github: "https://github.com/Aloyleow",
  linkedin: "https://www.linkedin.com/in/aloyleow",
  resume: null,
};

export function Administrative() {
  const { mode } = useMode();
  const { popper, setPopper } = usePoppers();
  return (
    <nav className={styles.container}>
      {Object.entries(themeSetting[mode]).map(([key, value], index) => {
        const adminAction = routeSettings[key as AdminImages];
        if (adminAction === null) {
          return (
            <button
              key={key}
              type="button"
              className={`button-as-div ${styles.imageHolder}`}
              style={rotateImageBaseOnIndex(index, 20)}
              onClick={() => setPopper({ ...popper, RESUME: true })}
            >
              <img src={value} alt={key} className={styles.image} />
            </button>
          );
        } else {
          return (
            <a
              key={key}
              target="_blank"
              rel="noopener noreferrer"
              href={adminAction}
              className={styles.imageHolder}
              style={rotateImageBaseOnIndex(index, 20)}
            >
              <img src={value} alt={key} className={styles.image} />
            </a>
          );
        }
      })}
    </nav>
  );
}
