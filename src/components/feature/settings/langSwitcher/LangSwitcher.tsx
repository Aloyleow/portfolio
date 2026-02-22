import type { Dispatch, SetStateAction } from "react";
import dlang from "../../../../assets/icons/dark/lang-d.svg";
import lang from "../../../../assets/icons/light/lang.svg";
import { usePoppers } from "../../../../state/poppers/usePoppers";
import type { ModeTypes } from "../../../../types/state.types";
import styles from "./LangSwitcher.module.css";

const themeSetting: Record<ModeTypes, string> = {
  light: lang,
  dark: dlang,
};

type LangSwitcherProps = {
  mode: ModeTypes;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
export function LangSwitcher({ mode, setOpen }: LangSwitcherProps) {
  const { popper, setPopper } = usePoppers();

  const handleLangSelect = () => {
    setPopper({ ...popper, LANGUAGE: true });
    setOpen(false);
    return;
  };

  return (
    <button
      className={`button-as-div standard-hover ${styles.langButton}`}
      type="button"
      onClick={() => handleLangSelect()}
    >
      <img src={themeSetting[mode]} alt="mode-switcher" />
    </button>
  );
}
