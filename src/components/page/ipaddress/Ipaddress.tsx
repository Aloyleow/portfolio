import { useState } from "react";
import { type GlitchHandle, useGlitch } from "react-powerglitch";
import cn from "../../../locale/cn/ipaddress_cn.json";
import en from "../../../locale/en/ipaddress_en.json";
import my from "../../../locale//my/ipaddress_my.json";
import type {
  LanguageTypes,
  LocaleSettingType,
  ModeTypes,
} from "../../../types/state.types";
import { sadEmotis } from "../../../utils/emots/sad";
import {
  type WhatsMyIpDetailsResponseType,
  whatsMyIpDetails,
} from "../../../utils/utils-for-users";
import { ipGlitchOpts } from "./animation";
import styles from "./Ipaddress.module.css";

type ContentType = {
  title: string;
  click: string;
  unable: string;
  unableSerious: string;
  fake: string;
};
type IpaddressProps = {
  mode: ModeTypes;
  languageDetect: LanguageTypes;
};

const localeSetting: LocaleSettingType<ContentType> = {
  en,
  cn,
  my,
};

const emotiForEasterState: Partial<Record<keyof ContentType, string>> = {
  unable: sadEmotis[0],
  unableSerious: sadEmotis[1],
};

export function Ipaddress({ mode, languageDetect }: IpaddressProps) {
  const [easterCount, setEasterCount] = useState<number>(0);
  const [easterState, setEasterState] = useState<null | keyof ContentType>(
    null,
  );
  const [ipAddressData, setIpAddressData] =
    useState<WhatsMyIpDetailsResponseType>();
  const glitch: GlitchHandle = useGlitch(ipGlitchOpts);

  const handleGetMyIp = async () => {
    const data = await whatsMyIpDetails();

    if (data.forwardIp) {
      setIpAddressData(data);
      setEasterCount(0);
    } else {
      setEasterState("unable");
      setEasterCount(() => easterCount + 1);
    }

    showEaster();

    return;
  };
  const showEaster = () => {
    if (easterCount > 3) {
      setEasterState("unableSerious");
    }

    if (easterCount > 8) {
      setEasterState("fake");
    }

    if (easterCount > 9) {
      setEasterCount(0);
      setEasterState(null);
    }
  };
  return (
    <section className={styles.container}>
      <h1>{localeSetting[languageDetect].title}</h1>

      <div className={styles.ip}>
        {easterState !== "fake" ? (
          !easterState ? (
            <h2>{ipAddressData?.forwardIp}</h2>
          ) : (
            <>
              <h2>{localeSetting[languageDetect][easterState]}</h2>
              <h2>{emotiForEasterState[easterState] ?? ""}</h2>
            </>
          )
        ) : (
          <div>
            <h2 ref={glitch.ref}>
              {localeSetting[languageDetect][easterState]}
            </h2>
          </div>
        )}
      </div>
      <button
        className="button-as-button"
        type="button"
        onClick={() => handleGetMyIp()}
      >
        {localeSetting[languageDetect].click}
      </button>
    </section>
  );
}
