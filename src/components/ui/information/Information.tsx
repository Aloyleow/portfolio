import toast from "react-hot-toast";
import caution from "../../../assets/icons/caution.svg";
import { uiLocaleSettings } from "../../../locale";
import type { LanguageTypes } from "../../../types/state.types";
import styles from "./Information.module.css";

type InformationProps = {
  notice: string;
  customDelay?: number;
  languageDetect?: LanguageTypes;
};

export function Information({
  notice,
  customDelay,
  languageDetect,
}: InformationProps) {
  return (
    <button
      type="button"
      className={`button-as-div ${styles.container}`}
      onClick={() =>
        toast(
          (_t) => (
            <span className={styles.toast}>
              <img src={caution} alt="caution" height={20} />
              <div className={styles.notice}>
                <p>{notice}</p>
                {customDelay && languageDetect && (
                  <button
                    type="button"
                    className="button-as-button"
                    onClick={() => toast.dismiss()}
                  >
                    {uiLocaleSettings[languageDetect].dismiss}
                  </button>
                )}
              </div>
            </span>
          ),
          { duration: customDelay ? customDelay * 1000 : undefined },
        )
      }
    >
      <p>i</p>
    </button>
  );
}
