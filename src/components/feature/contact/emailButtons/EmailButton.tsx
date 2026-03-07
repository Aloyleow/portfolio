import emailjs from "@emailjs/browser";
import type { Dispatch, SetStateAction } from "react";
import cn from "../../../../locale/cn/ui_cn.json";
import en from "../../../../locale/en/ui_en.json";
import my from "../../../../locale/my/ui_my.json";
import type { InputStageTypes } from "../../../../types/components/contact";
import type { EmailJsPayloadType } from "../../../../types/server/emailjs";
import type {
  LanguageTypes,
  LocaleSettingType,
  ModeTypes,
} from "../../../../types/state.types";
import styles from "./EmailButton.module.css";
import { emailPayloadParser } from "./validator";

type ContentType = {
  next: string;
  back: string;
  submit: string;
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
};

export function EmailButton({
  mode,
  languageDetect,
  inputStage,
  setInputStage,
  payload,
  setPayload,
  setErrMsg,
}: EmailButtonProps) {
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
    const result =
      emailPayloadParser(languageDetect).payload.safeParse(payload);
    if (!result.success) {
      setErrMsg(`${result.error.issues[0]?.message}`);
      return;
    }

    try {
      await emailjs.send(
        process.env.EJS_SERVICE_ID,
        process.env.EJS_TEMPLATE_IDFP,
        payload,
        process.env.EJS_PUBLIC_KEY,
      );
    } catch (error) {
      console.error(error);
    }

    return;
  };
  return (
    <div className={styles.container}>
      <div className={styles.limit}>
        {inputStage !== "un" && (
          <button
            type="button"
            className="button-as-button standard-hover"
            onClick={() => handleBack()}
          >
            {localeSetting[languageDetect].back}
          </button>
        )}
        {inputStage !== "ce" && (
          <button
            type="button"
            className="button-as-button standard-hover"
            onClick={() => handleNext()}
          >
            {localeSetting[languageDetect].next}
          </button>
        )}
        {inputStage === "ce" && (
          <button
            type="button"
            className="button-as-button standard-hover"
            onClick={() => handleSubmit()}
          >
            {localeSetting[languageDetect].submit}
          </button>
        )}
      </div>
    </div>
  );
}
