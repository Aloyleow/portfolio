import toast from "react-hot-toast";
import caution from "../../../assets/icons/caution.svg";
import styles from "./Information.module.css";

type InformationProps = {
  notice: string;
};

export function Information({ notice }: InformationProps) {
  return (
    <button
      type="button"
      className={`button-as-div ${styles.container}`}
      onClick={() =>
        toast((_t) => (
          <span className={styles.toast}>
            <img src={caution} alt="caution" height={20} />
            <p>{notice}</p>
          </span>
        ))
      }
    >
      <p>i</p>
    </button>
  );
}
