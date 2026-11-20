import { useState } from "react";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import styles from "./Gallery.module.css";

/** Converte "700", 700 ou "700px" em um valor CSS válido. */
const toCssSize = (value) => (value == null ? undefined : /^\d+(\.\d+)?$/.test(String(value)) ? `${value}px` : value);

/**
 * Carrossel de imagens.
 * @param {{src: string}[]} images
 * @param {string|number} width
 * @param {string|number} height
 * @param {string} radius - border-radius das imagens e miniaturas.
 * @param {boolean} showThumbs - exibe miniaturas abaixo do slide.
 * @param {string} className
 */
export default function Gallery({ images = [], width, height, radius = "0", showThumbs = false, className = "" }) {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) return null;

  const isFirst = current === 0;
  const isLast = current === images.length - 1;

  const goTo = (index) => setCurrent(Math.min(Math.max(index, 0), images.length - 1));

  return (
    <div className={`${styles.gallery} ${className}`} style={{ maxWidth: toCssSize(width) }}>
      <div
        className={styles.viewport}
        style={{ aspectRatio: width && height ? `${parseFloat(width)} / ${parseFloat(height)}` : undefined, borderRadius: radius }}
      >
        <div className={styles.track} style={{ transform: `translateX(-${current * 100}%)` }}>
          {images.map((image, index) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt ?? `Imagem ${index + 1} de ${images.length}`}
              className={styles.slide}
              aria-hidden={index !== current}
            />
          ))}
        </div>

        <button
          type="button"
          className={`${styles.arrow} ${styles.left}`}
          onClick={() => goTo(current - 1)}
          disabled={isFirst}
          aria-label="Imagem anterior"
        >
          <img src={arrowLeft} alt="" />
        </button>
        <button
          type="button"
          className={`${styles.arrow} ${styles.right}`}
          onClick={() => goTo(current + 1)}
          disabled={isLast}
          aria-label="Próxima imagem"
        >
          <img src={arrowRight} alt="" />
        </button>

        {!showThumbs && (
          <div className={styles.dots}>
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                className={`${styles.dot} ${index === current ? styles.dotActive : ""}`}
                onClick={() => goTo(index)}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {showThumbs && (
        <div className={styles.thumbs}>
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className={`${styles.thumb} ${index === current ? styles.thumbActive : ""}`}
              style={{ borderRadius: radius }}
              onClick={() => goTo(index)}
              aria-label={`Ver imagem ${index + 1}`}
            >
              <img src={image.src} alt="" style={{ borderRadius: radius }} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
