import { useId } from "react";
import styles from "./FilterGroup.module.css";

/**
 * Grupo de filtros (checkbox ou radio).
 * @param {string} title
 * @param {"checkbox"|"radio"} inputType
 * @param {{text: string, value?: string}[]} options
 * @param {string[]} [selected] - valores marcados (modo controlado).
 * @param {(value: string, checked: boolean) => void} [onChange]
 */
export default function FilterGroup({ title, inputType = "checkbox", options = [], selected, onChange }) {
  const groupId = useId();

  return (
    <fieldset className={styles.group}>
      <legend className={styles.title}>{title}</legend>
      {options.map((option, index) => {
        const value = option.value ?? option.text;
        const inputId = `${groupId}-${index}`;
        const controlled = selected !== undefined;

        return (
          <label key={inputId} htmlFor={inputId} className={styles.option}>
            <input
              id={inputId}
              type={inputType}
              name={groupId}
              value={value}
              checked={controlled ? selected.includes(value) : undefined}
              onChange={(event) => onChange?.(value, event.target.checked)}
            />
            <span>{option.text}</span>
          </label>
        );
      })}
    </fieldset>
  );
}
