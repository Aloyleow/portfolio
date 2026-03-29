import goat from "../../../assets/icons/goat-full-body-icon.svg";
import styles from "./UserUtils.module.css";
export function UserUtils() {
  return (
    <section className={styles.container}>
      <button type="button" className={`button-as-div ${styles.utilsButton}`}>
        <img src={goat} alt="goat" className={styles.utilsImage} />
      </button>
    </section>
  );
}
