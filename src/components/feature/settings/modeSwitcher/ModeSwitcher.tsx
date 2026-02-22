import dtheme from "../../../../assets/icons/dark/theme-d.svg";
import theme from "../../../../assets/icons/light/theme.svg";
import { useMode } from "../../../../state/mode/useMode";
import type { ModeTypes } from "../../../../types/state.types";
import styles from "./ModeSwitcher.module.css";

const themeSetting: Record<ModeTypes, string> = {
  light: theme,
  dark: dtheme,
};

//TODO(LOW) use hook or just pass down ? i mean we need hook no matter what
export function ModeSwitcher() {
  const { mode, setMode, userSelect, setUserSelect } = useMode();

  const handleSwitchMode = () => {
    if (!userSelect) {
      setUserSelect(true);
    }

    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };
  return (
    <button
      className={`button-as-div ${styles.modeButton}`}
      type="button"
      onClick={() => handleSwitchMode()}
    >
      <img src={themeSetting[mode]} alt="mode-switcher" />
    </button>
  );
}
