import { useEffect, useState } from "react";
import fl1 from "../../../../assets/projects/fl1.png";
import fl2 from "../../../../assets/projects/fl2.png";
import fl3 from "../../../../assets/projects/fl3.png";
import teg1 from "../../../../assets/projects/teg1.png";
import teg2 from "../../../../assets/projects/teg2.png";
import teg3 from "../../../../assets/projects/teg3.png";
import teg4 from "../../../../assets/projects/teg4.png";
import type { ModeTypes } from "../../../../types/state.types";
import styles from "./ImageCarousel.module.css";

const projectImages: Record<string, string> = {
  teg1,
  teg2,
  teg3,
  teg4,
  fl1,
  fl2,
  fl3,
};

type ImageCarouselProps = {
  mode: ModeTypes;
  imagesToShow: string[];
};

export function ImageCarousel({ imagesToShow, mode }: ImageCarouselProps) {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [image, setImage] = useState<string>();

  useEffect(() => {
    if (imagesToShow[0]) {
      setImage(projectImages[imagesToShow[0]]);
    }
  }, [imagesToShow[0]]);

  if (!imagesToShow[0]) {
    return;
  }

  const handleOnNext = (direction: "left" | "right") => {
    let newIndex = 0;

    if (direction === "left") {
      newIndex = imageIndex - 1;
      if (newIndex === -1) {
        newIndex = imagesToShow.length - 1;
      }
    } else {
      newIndex = imageIndex + 1;
      if (newIndex === imagesToShow.length) {
        newIndex = 0;
      }
    }

    setImageIndex(newIndex);

    const imageKey = imagesToShow[newIndex];
    if (!imageKey) {
      return;
    }
    setImage(projectImages[imageKey]);
  };

  const trackerColor = mode === "light" ? "black" : "grey";
  return (
    <div className={styles.container}>
      <img src={image} alt={image} className={styles.image} />
      <button
        type="button"
        onClick={() => handleOnNext("left")}
        className={`button-as-div`}
        style={{ left: 0 }}
      />
      <button
        type="button"
        onClick={() => handleOnNext("right")}
        className={`button-as-div`}
        style={{ right: 0 }}
      />
      <div className={styles.trackerHolder}>
        {imagesToShow.map((item, index) => (
          <div
            key={item}
            className={styles.tracker}
            style={{
              backgroundColor: `${index === imageIndex ? trackerColor : ""}`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
