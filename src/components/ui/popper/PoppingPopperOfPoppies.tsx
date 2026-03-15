import type { ReactNode } from "react";
import styles from "./PoppingPopperOfPoppies.module.css";

type PoppingPopperOfPoppiesProps = {
  children: ReactNode;
};
export function PoppingPopperOfPoppies({
  children,
}: PoppingPopperOfPoppiesProps) {
  return (
    <section className={styles.container}>
      <div className={styles.limit}>{children}</div>
    </section>
  );
}
