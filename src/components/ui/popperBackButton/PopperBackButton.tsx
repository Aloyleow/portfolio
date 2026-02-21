import { usePoppers } from "../../../state/poppers/usePoppers";
import styles from "./PopperBackButton.module.css";

export function PopperBackButton() {
  const { popper, setPopper } = usePoppers();
  return (
    <button
      className={`button-as-div standard-hover ${styles.cancelButton}`}
      type="button"
      onClick={() => setPopper({ ...popper, RESUME: false })}
    >
      Back
    </button>
  );
}
