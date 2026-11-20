import { useState } from "react";
import styles from "./ProductOptions.module.css";

/**
 * Seletor de variações do produto (tamanho, cor...).
 * @param {string[]} options
 * @param {"square"|"circle"} shape
 * @param {string} radius - usado apenas com shape "square".
 * @param {"text"|"color"} type
 * @param {string} [title]
 */
export default function ProductOptions({ options = [], shape = "square", radius = "4px", type = "text", title }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className={styles.wrapper}>
      {title && <p className={styles.title}>{title}</p>}
      <div className={styles.options} role="radiogroup" aria-label={title}>
        {options.map((option) => {
          const isSelected = selected === option;
          const style = {
            borderRadius: shape === "circle" ? "50%" : radius,
            backgroundColor: type === "color" ? option : undefined,
          };

          return (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={isSelected}
              aria-label={type === "color" ? `Cor ${option}` : option}
              className={`${styles.option} ${styles[shape]} ${type === "text" ? styles.text : ""} ${isSelected ? styles.selected : ""}`}
              style={style}
              onClick={() => setSelected(option)}
            >
              {type === "text" ? option : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
