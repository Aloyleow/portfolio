import { Link } from "@tanstack/react-router";
import { type GlitchHandle, useGlitch } from "react-powerglitch";
import { uiLocaleSettings } from "../../../locale";
import { useLanguage } from "../../../state/language/useLanguage";
import type { CustomCssVars } from "../../../types/utility.types";
import { footerGlitchOpts } from "./animation";
import styles from "./Footer.module.css";

const tagLine = ["INNOVATE", "COMPILE", "EXECUTE"];

export function Footer() {
  const { languageDetect } = useLanguage();
  const glitch: GlitchHandle = useGlitch(footerGlitchOpts);

  return (
    <footer className={styles.container}>
      <span className={styles.limit}>
        <div className={styles.info}>
          <p>@ 2026 Aloysious Leow</p>
          <Link to="/privacy">{uiLocaleSettings[languageDetect].privacy}</Link>
          <a
            href="https://github.com/Aloyleow/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            {uiLocaleSettings[languageDetect].source}
          </a>
        </div>
        {tagLine.map((x, index) => (
          <div
            key={x}
            className={`${styles.marquee}`}
            style={{ "--tagline-delay": `${index * 6.4}s` } as CustomCssVars}
          >
            <div ref={glitch.ref}>
              <h1>{x}</h1>
            </div>
          </div>
        ))}
      </span>
    </footer>
  );
}
