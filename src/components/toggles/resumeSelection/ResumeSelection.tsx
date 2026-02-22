import dworddoc from "../../../assets/icons/dark/docx-d.svg";
import dpdf from "../../../assets/icons/dark/pdf-d.svg";
import worddoc from "../../../assets/icons/light/docx.svg";
import pdf from "../../../assets/icons/light/pdf.svg";
import cn from "../../../locale/cn/ui_cn.json";
import en from "../../../locale/en/ui_en.json";
import my from "../../../locale/my/ui_my.json";

import type {
  LanguageTypes,
  LocaleSettingType,
  ModeTypes,
  ThemeSettingType,
} from "../../../types/state.types";
import { PoppingPopperOfPoppies } from "../../ui/popper/PoppingPopperOfPoppies";
import { PopperBackButton } from "../../ui/popperBackButton/PopperBackButton";
import styles from "./ResumeSelection.module.css";

type ResumeFormatTypes = "word" | "pdf";

type ResumeLinkType = Record<ResumeFormatTypes, string>;

type ContentType = {
  format: string;
};

const themeSetting: ThemeSettingType<ResumeFormatTypes> = {
  light: {
    word: worddoc,
    pdf,
  },
  dark: {
    word: dworddoc,
    pdf: dpdf,
  },
};

const resumeLinks: ResumeLinkType = {
  word: "public/resume.docx",
  pdf: "public/resume.pdf",
};

const localeSetting: LocaleSettingType<ContentType> = {
  en,
  cn,
  my,
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
        <h2>{localeSetting[languageDetect].format}</h2>
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
