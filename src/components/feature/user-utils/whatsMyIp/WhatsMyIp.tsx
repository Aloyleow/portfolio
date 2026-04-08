import { useRouter } from "@tanstack/react-router";
import type { Dispatch, SetStateAction } from "react";
import dip from "../../../../assets/icons/dark/ip-d.svg";
import ip from "../../../../assets/icons/light/ip.svg";
import type { ModeTypes } from "../../../../types/state.types";
import styles from "./WhatsMyIp.module.css";

const themeSetting: Record<ModeTypes, string> = {
  light: ip,
  dark: dip,
};

type WhatsMyIpProps = {
  mode: ModeTypes;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
export function WhatsMyIp({ mode, setOpen }: WhatsMyIpProps) {
  const router = useRouter();
  const handleLangSelect = () => {
    router.navigate({ to: "/goat/ip-address" });
    setOpen(false);
    return;
  };

  return (
    <button
      className={`button-as-div standard-hover ${styles.ipButton}`}
      type="button"
      onClick={() => handleLangSelect()}
    >
      <img src={themeSetting[mode]} alt="what-ip" />
    </button>
  );
}
