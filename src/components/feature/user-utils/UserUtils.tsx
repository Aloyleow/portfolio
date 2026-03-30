import toast from "react-hot-toast";
import goat from "../../../assets/icons/goat-full-body-icon.svg";
import { uiLocaleSettings } from "../../../locale";
import type { LanguageTypes } from "../../../types/state.types";
import styles from "./UserUtils.module.css";

type UserUtilsProps = {
  languageDetect: LanguageTypes;
};

export function UserUtils({ languageDetect }: UserUtilsProps) {
  return (
    <section className={styles.container}>
      <button
        type="button"
        className={`button-as-div ${styles.utilsButton}`}
        onClick={() => toast(`${uiLocaleSettings[languageDetect].coming} !`)}
      >
        <img src={goat} alt="goat" className={styles.utilsImage} />
      </button>
    </section>
  );
}
