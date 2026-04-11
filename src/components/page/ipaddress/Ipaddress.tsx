import { useState } from "react";
import toast from "react-hot-toast";
import { type GlitchHandle, useGlitch } from "react-powerglitch";
import cn from "../../../locale/cn/ipaddress_cn.json";
import en from "../../../locale/en/ipaddress_en.json";
import my from "../../../locale//my/ipaddress_my.json";
import type {
  LanguageTypes,
  LocaleSettingType,
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
  easter: {
    unable: string;
    unableSerious: string;
    fake: string;
    serious: string;
  };
};
type IpaddressProps = {
  // mode: ModeTypes;
  languageDetect: LanguageTypes;
};

const localeSetting: LocaleSettingType<ContentType> = {
  en,
  cn,
  my,
};

const emotiForEasterState: Partial<
  Record<keyof ContentType["easter"], string>
> = {
  unable: sadEmotis[0],
  unableSerious: sadEmotis[1],
};

export function Ipaddress({ languageDetect }: IpaddressProps) {
  const [easterCount, setEasterCount] = useState<number>(0);
  const [easterState, setEasterState] = useState<
    null | keyof ContentType["easter"]
  >(null);
  const [ipAddressData, setIpAddressData] =
    useState<WhatsMyIpDetailsResponseType>();
  const glitch: GlitchHandle = useGlitch(ipGlitchOpts);

  const handleGetMyIp = async () => {
    const data = await whatsMyIpDetails();

    if (data.forwardIp) {
      setIpAddressData(data);
      setEasterCount(0);
    }

    showEaster();

    return;
  };
  const showEaster = () => {
    setEasterCount(() => easterCount + 1);

    if (easterCount > 6) {
      setEasterCount(0);
      setEasterState(null);
      toast.error(`${localeSetting[languageDetect].easter.serious}`);
    } else if (easterCount > 4) {
      setEasterState("fake");
    } else if (easterCount > 2) {
      setEasterState("unableSerious");
    } else {
      setEasterState("unable");
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
              <h2>{localeSetting[languageDetect].easter[easterState]}</h2>
              <h2>{emotiForEasterState[easterState] ?? ""}</h2>
            </>
          )
        ) : (
          <div>
            <h2 ref={glitch.ref}>
              {localeSetting[languageDetect].easter[easterState]}
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
