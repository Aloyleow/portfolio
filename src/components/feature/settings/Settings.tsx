import { useState } from "react";
import dsettings from "../../../assets/icons/dark/settings-d.svg";
import settings from "../../../assets/icons/light/settings.svg";
import type { ModeTypes } from "../../../types/state.types";
import { LangSwitcher } from "./langSwitcher/LangSwitcher";
import { ModeSwitcher } from "./modeSwitcher/ModeSwitcher";
import styles from "./Settings.module.css";

const themeSetting: Record<ModeTypes, string> = {
  light: settings,
  dark: dsettings,
};

export function Settings({ mode }: { mode: ModeTypes }) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: <TODO(Urgent) find a solution to this>
    <section className={styles.container} onMouseLeave={() => setOpen(false)}>
      {open && <LangSwitcher mode={mode} setOpen={setOpen} />}
      {open && <ModeSwitcher />}
      <button
        type="button"
        className={`button-as-div ${styles.button}`}
        onMouseEnter={() => setOpen(true)}
      >
        <img src={themeSetting[mode]} alt="setting" className={styles.image} />
      </button>
    </section>
  );
}
