import cn from "../../../locale/cn/ui_cn.json";
import en from "../../../locale/en/ui_en.json";
import my from "../../../locale/my/ui_my.json";
import { useLanguage } from "../../../state/language/useLanguage";
import { usePoppers } from "../../../state/poppers/usePoppers";
import type { LocaleSettingType } from "../../../types/state.types";
import styles from "./PopperBackButton.module.css";

type ContentType = {
  back: string;
};

const localeSetting: LocaleSettingType<ContentType> = {
  en,
  cn,
  my,
};

export function PopperBackButton() {
  const { popper, setPopper } = usePoppers();
  const { languageDetect } = useLanguage();
  return (
    <button
      className={`button-as-div standard-hover ${styles.cancelButton}`}
      type="button"
      onClick={() => setPopper({ ...popper, RESUME: false })}
    >
      {localeSetting[languageDetect].back}
    </button>
  );
}
