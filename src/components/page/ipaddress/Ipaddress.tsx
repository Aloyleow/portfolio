import { useState } from "react";
import cn from "../../../locale/cn/ipaddress_cn.json";
import en from "../../../locale/en/ipaddress_en.json";
import my from "../../../locale//my/ipaddress_my.json";
import type {
  LanguageTypes,
  LocaleSettingType,
  ModeTypes,
} from "../../../types/state.types";
import {
  type WhatsMyIpDetailsResponseType,
  whatsMyIpDetails,
} from "../../../utils/utils-for-users";
import styles from "./Ipaddress.module.css";

type ContentType = {
  title: string;
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

export function Ipaddress({ mode, languageDetect }: IpaddressProps) {
  const [ipAddressData, setIpAddressData] =
    useState<WhatsMyIpDetailsResponseType>();

  const handleGetMyIp = async () => {
    const data = await whatsMyIpDetails();
  };

  return (
    <section className={styles.container}>
      <header></header>
      <main></main>
    </section>
  );
}
