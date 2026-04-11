import { useState } from "react";
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

  const handleGetMyIp = async () => {
    const data = await whatsMyIpDetails();

    if (data.forwardIp) {
      setIpAddressData(data);
      setEasterCount(0);
    } else {
      setEasterState("unable");
      setEasterCount(() => easterCount + 1);
    }

    if (easterCount > 3) {
      setEasterState("unableSerious");
    }

    if (easterCount > 8) {
      setEasterState("fake");
    }
    return;
  };

  return (
    <section className={styles.container}>
      <header>{localeSetting[languageDetect].title}</header>

      <div className={styles.ip}>
        {easterState !== "fake" ? (
          <h1>
            {!easterState
              ? ipAddressData?.forwardIp
              : `${localeSetting[languageDetect][easterState]} ${emotiForEasterState[easterState] ?? ""}`}
          </h1>
        ) : (
          <h1>{localeSetting[languageDetect][easterState]}</h1>
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
