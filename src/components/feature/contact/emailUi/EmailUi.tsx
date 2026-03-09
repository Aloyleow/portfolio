import type { Dispatch, SetStateAction } from "react";
import cn from "../../../../locale/cn/contact_cn.json";
import en from "../../../../locale/en/contact_en.json";
import my from "../../../../locale/my/contact_my.json";
import type {
  EmailJsPayloadType,
  InputStageTypes,
} from "../../../../types/components/contact";

import type {
  LanguageTypes,
  LocaleSettingType,
  ModeTypes,
} from "../../../../types/state.types";
import styles from "./EmailUi.module.css";

type ContentType = {
  username: string;
  message: string;
  contact: string;
};

const localeSetting: LocaleSettingType<ContentType> = {
  en,
  cn,
  my,
};

type EmailUiProps = {
  mode: ModeTypes;
  languageDetect: LanguageTypes;
  inputStage: InputStageTypes;
  payload: EmailJsPayloadType;
  setPayload: Dispatch<SetStateAction<EmailJsPayloadType>>;
  errMsg: string | null;
  setErrMsg: Dispatch<SetStateAction<string | null>>;
};

//TODO(HIGH) created single func
export function EmailUi({
  languageDetect,
  inputStage,
  payload,
  setPayload,
  errMsg,
  setErrMsg,
}: EmailUiProps) {
  return (
    <div className={styles.container}>
      {inputStage === "un" && (
        <input
          placeholder={`${localeSetting[languageDetect].username}`}
          className={`${errMsg != null ? styles.inputError : ""}`}
          onChange={(event) => {
            if (errMsg != null) {
              setErrMsg(null);
            }
            event.preventDefault;
            setPayload({ ...payload, user_name: event.target.value });
          }}
        />
      )}
      {inputStage === "me" && (
        <input
          placeholder={`${localeSetting[languageDetect].message}`}
          className={`${errMsg != null ? styles.inputError : ""}`}
          onChange={(event) => {
            if (errMsg != null) {
              setErrMsg(null);
            }
            event.preventDefault;
            setPayload({ ...payload, message: event.target.value });
          }}
        />
      )}

      {inputStage === "ce" && (
        <input
          placeholder={`${localeSetting[languageDetect].contact}`}
          className={`${errMsg != null ? styles.inputError : ""}`}
          onChange={(event) => {
            if (errMsg != null) {
              setErrMsg(null);
            }
            event.preventDefault;
            setPayload({ ...payload, contactemail: event.target.value });
          }}
        />
      )}
    </div>
  );
}
