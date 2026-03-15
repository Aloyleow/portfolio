import type { Dispatch, SetStateAction } from "react";
import dgithub from "../../../assets/icons/dark/github-d.svg";
import dlinkedin from "../../../assets/icons/dark/linkedin-d.svg";
import dresume from "../../../assets/icons/dark/resume-d.svg";
import github from "../../../assets/icons/light/github.svg";
import linkedin from "../../../assets/icons/light/linkedin.svg";
import resume from "../../../assets/icons/light/resume.svg";
import type {
  ModeTypes,
  PopperTypes,
  ThemeSettingType,
} from "../../../types/state.types";
import type { CustomCssVars } from "../../../types/utility.types";
import styles from "./Administrative.module.css";
import { rotateImageBaseOnIndex } from "./Administrative.style";

type AdminImages = "github" | "linkedin" | "resume";

type RouteSettingType = Record<AdminImages, string | null>;

type AdministrativeProps = {
  mode: ModeTypes;
  popper: PopperTypes;
  setPopper: Dispatch<SetStateAction<PopperTypes>>;
};

const themeSetting: ThemeSettingType<AdminImages> = {
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

export function Administrative({
  mode,
  popper,
  setPopper,
}: AdministrativeProps) {
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
              style={
                {
                  ...rotateImageBaseOnIndex(index, 20),
                  "--image-comin-delay": `${index / 3}s`,
                } as CustomCssVars
              }
              onClick={() => setPopper({ ...popper, RESUME: true })}
            >
              <img
                src={value}
                alt={key}
                className={styles.image}
                style={rotateImageBaseOnIndex(index, 20)}
              />
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
              style={
                {
                  "--image-comin-delay": `${index / 3}s`,
                } as CustomCssVars
              }
            >
              <img
                src={value}
                alt={key}
                className={styles.image}
                style={rotateImageBaseOnIndex(index, 20)}
              />
            </a>
          );
        }
      })}
    </nav>
  );
}
