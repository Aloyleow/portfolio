import { useLocation, useRouter } from "@tanstack/react-router";
import cn from "../../../locale/cn/not_found_cn.json";
import en from "../../../locale/en/not_found_en.json";
import my from "../../../locale/my/not_found_my.json";
import { useLanguage } from "../../../state/language/useLanguage";
import type { LocaleSettingType } from "../../../types/state.types";
import { Information } from "../../ui/information/Information";
import styles from "./NotFound.module.css";

type ContentType = {
  oops: string;
  full: string;
  part: string;
};

const localeSetting: LocaleSettingType<ContentType> = {
  en,
  cn,
  my,
};

export default function NotFound() {
  const location = useLocation();
  const router = useRouter();
  const { languageDetect } = useLanguage();

  return (
    <section className={styles.container}>
      <header className={styles.upperlimit}>
        <h1>{localeSetting[languageDetect].oops}</h1>
      </header>
      <main className={styles.middlelimit}>
        <p>{localeSetting[languageDetect].full}</p>
        <Information
          notice={`${location.pathname} ${localeSetting[languageDetect].part}`}
        />
      </main>
      <footer>
        <button
          type="button"
          onClick={() => router.navigate({ to: "/" })}
          className="button-as-button standard-hover"
        >
          Home
        </button>
      </footer>
    </section>
  );
}
