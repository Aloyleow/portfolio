import type {
  EmailJsPayloadType,
  InputStageTypes,
} from "../../../../types/components/contact";

import type { ModeTypes } from "../../../../types/state.types";
import styles from "./EmailDisplay.module.css";

type EmailDisplayProps = {
  mode: ModeTypes;
  payload: EmailJsPayloadType;
  inputStage: InputStageTypes;
};

export function EmailDisplay({ payload, inputStage }: EmailDisplayProps) {
  return (
    <div className={styles.container}>
      <h4>To: aloyleow91@gmail.com</h4>
      <h4>Subject: Hi!</h4>
      <div className={styles.middlelimit}>
        <p className={`${inputStage === "un" ? `${styles.customcursor}` : ""}`}>
          Hi i am, {payload.user_name}
        </p>
        <p className={`${inputStage === "me" ? `${styles.customcursor}` : ""}`}>
          {payload.message}
        </p>
      </div>
      <div
        className={`${styles.lowerlimit} ${inputStage === "ce" ? "" : `${styles.hide}`}`}
      >
        <p className={`${inputStage === "ce" ? `${styles.customcursor}` : ""}`}>
          You can contact me at {payload.contactemail}
        </p>
      </div>
    </div>
  );
}
