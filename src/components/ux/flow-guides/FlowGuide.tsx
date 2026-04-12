import { useEffect, useState } from "react";
import { useGlitch } from "react-powerglitch";
import darrow from "../../../assets/icons/dark/arrow-d.svg";
import arrow from "../../../assets/icons/light/arrow.svg";
import type { FlowGuideTargetType } from "../../../types/components/ux/flow-guide.types";
import type { ModeTypes } from "../../../types/state.types";
import { directionGlitchOpts } from "./animation";
import styles from "./FlowGuide.module.css";

const themeSetting: Record<ModeTypes, string> = {
  light: arrow,
  dark: darrow,
};
type FlowGuideProps = {
  mode: ModeTypes;
  target: FlowGuideTargetType[];
};

export function FlowGuide({ mode, target }: FlowGuideProps) {
  const [entryTargetId, setEntryTargetId] = useState<string>("");
  const [showTopGuide, setShowTopGuide] = useState<boolean>(false);
  const [showBottomGuide, setShowBottomGuide] = useState<boolean>(false);
  const glitch = useGlitch(directionGlitchOpts);

  useEffect(() => {
    const track = new IntersectionObserver(
      (items) => {
        for (const entry of items) {
          if (entry.isIntersecting) {
            setEntryTargetId(entry.target.id);
          }
        }
      },
      { threshold: 0.8 },
    );
    const elements = target.map((obj) =>
      document.querySelectorAll(obj.element),
    );

    for (const element of elements) {
      for (const section of element) {
        track.observe(section);
      }
    }

    const directionToShow = target.find(
      (x) => x.id === entryTargetId,
    )?.direction;

    if (directionToShow === "T") {
      setShowTopGuide(true);
    } else if (directionToShow === "B") {
      setShowBottomGuide(true);
    } else {
      setShowBottomGuide(false);
      setShowTopGuide(false);
    }

    return () => track.disconnect();
  }, [target, entryTargetId]);

  return (
    <>
      {showTopGuide && (
        <div className={styles.topcontainer}>
          <div className={styles.topguide}>
            <img
              ref={glitch.ref}
              src={themeSetting[mode]}
              className={`${styles.image}`}
              alt="up"
            />
          </div>
        </div>
      )}
      {showBottomGuide && (
        <div className={styles.bottomcontainer}>
          <div className={styles.bottomguide}>
            <img
              ref={glitch.ref}
              src={themeSetting[mode]}
              className={`${styles.image}`}
              alt="down"
            />
          </div>
        </div>
      )}
    </>
  );
}
