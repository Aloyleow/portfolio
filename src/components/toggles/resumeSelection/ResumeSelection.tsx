import dworddoc from "../../../assets/icons/dark/docx-d.svg";
import dpdf from "../../../assets/icons/dark/pdf-d.svg";
import dtxt from "../../../assets/icons/dark/txt-d.svg";
import worddoc from "../../../assets/icons/light/docx.svg";
import pdf from "../../../assets/icons/light/pdf.svg";
import txt from "../../../assets/icons/light/txt.svg";
import { uiLocaleSettings } from "../../../locale";

import type {
  LanguageTypes,
  ModeTypes,
  ThemeSettingType,
} from "../../../types/state.types";
import { PoppingPopperOfPoppies } from "../../ui/popper/PoppingPopperOfPoppies";
import { PopperBackButton } from "../../ui/popperBackButton/PopperBackButton";
import styles from "./ResumeSelection.module.css";

type ResumeFormatTypes = "word" | "pdf" | "txt";

type ResumeLinkType = Record<ResumeFormatTypes, string>;

const themeSetting: ThemeSettingType<ResumeFormatTypes> = {
  light: {
    word: worddoc,
    pdf,
    txt,
  },
  dark: {
    word: dworddoc,
    pdf: dpdf,
    txt: dtxt,
  },
};

const resumeLinks: ResumeLinkType = {
  word: "/resume.docx",
  pdf: "/resume.pdf",
  txt: "/resume.txt",
};

type ResumeSelectionProps = {
  mode: ModeTypes;
  languageDetect: LanguageTypes;
};

export function ResumeSelection({
  mode,
  languageDetect,
}: ResumeSelectionProps) {
  return (
    <PoppingPopperOfPoppies>
      <header className={styles.upperlimit}>
        <h2>{uiLocaleSettings[languageDetect].format}</h2>
      </header>
      <nav className={styles.middlelimit}>
        {Object.entries(themeSetting[mode]).map(([key, value]) => {
          const linkAction = key as ResumeFormatTypes;
          return (
            <a
              key={key}
              target="_blank"
              rel="noopener noreferrer"
              href={resumeLinks[linkAction]}
              className={styles.imageHolder}
            >
              <img src={value} alt={key} className={styles.image} />
            </a>
          );
        })}
      </nav>
      <footer className={styles.lowerlimit}>
        <PopperBackButton />
      </footer>
    </PoppingPopperOfPoppies>
  );
}
