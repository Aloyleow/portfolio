import { useState } from "react";
import cn from "../../../locale/cn/contact_cn.json";
import en from "../../../locale/en/contact_en.json";
import my from "../../../locale/my/contact_my.json";
import type { InputStageTypes } from "../../../types/components/contact";
import type { EmailJsPayloadType } from "../../../types/server/emailjs";
import type {
  LanguageTypes,
  LocaleSettingType,
  ModeTypes,
} from "../../../types/state.types";
import styles from "./Contact.module.css";
import { EmailButton } from "./emailButtons/EmailButton";
import { EmailDisplay } from "./emailDisplay/EmailDisplay";
import { EmailUi } from "./emailUi/EmailUi";

type ContentType = {
  title: string;
};

const localeSetting: LocaleSettingType<ContentType> = {
  en,
  cn,
  my,
};

type ContactProps = {
  mode: ModeTypes;
  languageDetect: LanguageTypes;
};

export function Contact({ mode, languageDetect }: ContactProps) {
  const [payload, setPayload] = useState<EmailJsPayloadType>({
    user_name: "",
    message: "",
    contactemail: "",
  });
  const [inputStage, setInputStage] = useState<InputStageTypes>("un");
  const [errMsg, setErrMsg] = useState<string | null>(null);

  return (
    <section className={styles.container}>
      <header>{localeSetting[languageDetect].title}</header>
      <EmailDisplay mode={mode} payload={payload} inputStage={inputStage} />
      <div className={styles.error}>
        <p>{errMsg}</p>
      </div>
      <EmailUi
        mode={mode}
        languageDetect={languageDetect}
        inputStage={inputStage}
        payload={payload}
        setPayload={setPayload}
        errMsg={errMsg}
        setErrMsg={setErrMsg}
      />
      <EmailButton
        mode={mode}
        languageDetect={languageDetect}
        inputStage={inputStage}
        setInputStage={setInputStage}
        payload={payload}
        setPayload={setPayload}
        setErrMsg={setErrMsg}
      />
    </section>
  );
}
