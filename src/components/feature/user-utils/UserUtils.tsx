import { useState } from "react";
import goat from "../../../assets/icons/goat-full-body-icon.svg";
import type { ModeTypes } from "../../../types/state.types";
import styles from "./UserUtils.module.css";
import { WhatsMyIp } from "./whatsMyIp/WhatsMyIp";

type UserUtilsProps = {
  mode: ModeTypes;
};

export function UserUtils({ mode }: UserUtilsProps) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: <TODO(Urgent) find a solution to this>
    <section className={styles.container} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        className={`button-as-div ${styles.utilsButton}`}
        onMouseEnter={() => setOpen(true)}
        onFocus={() => setOpen(true)}
      >
        <img src={goat} alt="goat" className={styles.utilsImage} />
      </button>
      {open && <WhatsMyIp mode={mode} setOpen={setOpen} />}
    </section>
  );
}
