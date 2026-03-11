import { type GlitchHandle, useGlitch } from "react-powerglitch";
import type { CustomCssVars } from "../../../types/utility.types";
import { footerGlitchOpts } from "./animation";
import styles from "./Footer.module.css";

const tagLine = ["INNOVATE", "COMPILE", "EXECUTE"];

export function Footer() {
  const glitch: GlitchHandle = useGlitch(footerGlitchOpts);

  return (
    <footer className={styles.container}>
      <span className={styles.limit}>
        <div className={styles.info}>
          <p>@ 2026 Aloysious Leow</p>
          <p>Privacy</p>
          <p>Source</p>
        </div>
        {tagLine.map((x, index) => (
          <div
            key={x}
            className={`${styles.marquee}`}
            style={{ "--tagline-delay": `${index * 6.4}s` } as CustomCssVars}
          >
            <div>
              <h1 ref={glitch.ref}>{x}</h1>
            </div>
          </div>
        ))}
      </span>
    </footer>
  );
}
