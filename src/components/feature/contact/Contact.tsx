import { useEffect, useState } from "react";
import cn from "../../../locale/cn/contact_cn.json";
import en from "../../../locale/en/contact_en.json";
import my from "../../../locale/my/contact_my.json";
import type {
  EmailJsPayloadType,
  InputStageTypes,
} from "../../../types/components/contact.types";

import type {
  LanguageTypes,
  LocaleSettingType,
  ModeTypes,
} from "../../../types/state.types";
import { Information } from "../../ui/information/Information";
import styles from "./Contact.module.css";
import { EmailButton } from "./emailButtons/EmailButton";
import { EmailDisplay } from "./emailDisplay/EmailDisplay";
import { EmailUi } from "./emailUi/EmailUi";
import { getEmailSentFlag } from "./limiter";

type ContentType = {
  title: string;
  success: string;
  emailsentinfo: string;
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
  const [restrict, setRestrict] = useState<boolean>(true);

  useEffect(() => {
    const recentlySent = getEmailSentFlag();
    if (!recentlySent) {
      setRestrict(false);
    }
    return;
  }, []);

  return (
    <section className={styles.container} id="contact">
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
      {restrict ? (
        <div className={styles.success}>
          <p style={{ color: "green" }}>
            {localeSetting[languageDetect].success}
          </p>
          <Information notice={localeSetting[languageDetect].emailsentinfo} />
        </div>
      ) : (
        <EmailButton
          mode={mode}
          languageDetect={languageDetect}
          inputStage={inputStage}
          setInputStage={setInputStage}
          payload={payload}
          setPayload={setPayload}
          setErrMsg={setErrMsg}
          setRestrict={setRestrict}
        />
      )}
    </section>
  );
}
