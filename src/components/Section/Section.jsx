import { Link } from "react-router-dom";
import styles from "./Section.module.css";

/**
 * Seção com título e link opcional.
 * @param {string} title
 * @param {"left"|"center"} titleAlign
 * @param {{text: string, href: string}} link
 */
export default function Section({ title, titleAlign = "left", link, children, className = "" }) {
  return (
    <section className={`${styles.section} ${className}`}>
      {(title || link) && (
        <div className={`${styles.heading} ${titleAlign === "center" ? styles.center : ""}`}>
          {title && <h2 className={styles.title}>{title}</h2>}
          {link && (
            <Link to={link.href} className={styles.link}>
              {link.text}
              <span aria-hidden="true"> →</span>
            </Link>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
