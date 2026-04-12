import emailjs from "@emailjs/browser";
import { type Dispatch, type SetStateAction, useState } from "react";
import { uiLocaleSettings } from "../../../../locale";
import cn from "../../../../locale/cn/contact_cn.json";
import en from "../../../../locale/en/contact_en.json";
import my from "../../../../locale/my/contact_my.json";
import type {
  EmailJsPayloadType,
  InputStageTypes,
} from "../../../../types/components/contact.types";
import type {
  LanguageTypes,
  LocaleSettingType,
  ModeTypes,
} from "../../../../types/state.types";
import { setEmailSentFlag } from "../limiter";
import styles from "./EmailButton.module.css";
import { emailPayloadParser } from "./validator";

type ContentType = {
  error: {
    email: {
      default: string;
    };
  };
};

const localeSetting: LocaleSettingType<ContentType> = {
  en,
  cn,
  my,
};

type EmailButtonProps = {
  mode: ModeTypes;
  languageDetect: LanguageTypes;
  inputStage: InputStageTypes;
  setInputStage: Dispatch<SetStateAction<InputStageTypes>>;
  payload: EmailJsPayloadType;
  setPayload: Dispatch<SetStateAction<EmailJsPayloadType>>;
  setErrMsg: Dispatch<SetStateAction<string | null>>;
  setRestrict: Dispatch<SetStateAction<boolean>>;
};

export function EmailButton({
  languageDetect,
  inputStage,
  setInputStage,
  payload,
  setPayload,
  setErrMsg,
  setRestrict,
}: EmailButtonProps) {
  const [loader, setLoader] = useState<boolean>(false);
  const handleNext = () => {
    setErrMsg(null);
    if (inputStage === "un") {
      const result = emailPayloadParser(languageDetect).user_name.safeParse(
        payload.user_name,
      );
      if (!result.success) {
        setErrMsg(`${result.error.issues[0]?.message}`);
        return;
      }
      setInputStage("me");
    }
    if (inputStage === "me") {
      const result = emailPayloadParser(languageDetect).message.safeParse(
        payload.message,
      );
      if (!result.success) {
        setErrMsg(`${result.error.issues[0]?.message}`);
        return;
      }
      setInputStage("ce");
    }
    return;
  };

  const handleBack = () => {
    setErrMsg(null);
    if (inputStage === "ce") {
      setPayload({ ...payload, contactemail: "" });
      setInputStage("me");
    }
    if (inputStage === "me") {
      setPayload({ ...payload, message: "" });
      setInputStage("un");
    }
    return;
  };

  const handleSubmit = async () => {
    setLoader(true);
    const result =
      emailPayloadParser(languageDetect).payload.safeParse(payload);
    if (!result.success) {
      setErrMsg(`${result.error.issues[0]?.message}`);
      setLoader(false);
      return;
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_EJS_SERVICE_ID,
        import.meta.env.VITE_EJS_TEMPLATE_IDFP,
        payload,
        { publicKey: import.meta.env.VITE_EJS_PUBLIC_KEY },
      );
      setEmailSentFlag();
      setRestrict(true);
    } catch (_error) {
      setErrMsg(`${localeSetting[languageDetect].error.email.default}`);
    }
    setLoader(false);
    return;
  };

  return (
    <div className={styles.container}>
      {!loader ? (
        <div className={styles.limit}>
          {inputStage !== "un" && (
            <button
              type="button"
              className="button-as-button standard-hover"
              onClick={() => handleBack()}
            >
              {uiLocaleSettings[languageDetect].back}
            </button>
          )}
          {inputStage !== "ce" && (
            <button
              type="button"
              className="button-as-button standard-hover"
              onClick={() => handleNext()}
            >
              {uiLocaleSettings[languageDetect].next}
            </button>
          )}
          {inputStage === "ce" && (
            <button
              type="button"
              className="button-as-button standard-hover"
              onClick={() => handleSubmit()}
            >
              {uiLocaleSettings[languageDetect].submit}
            </button>
          )}
        </div>
      ) : (
        <div className={styles.loader}></div>
      )}
    </div>
  );
}
