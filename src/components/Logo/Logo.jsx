import { Link } from "react-router-dom";
import logoHeader from "../../assets/logo-header.svg";
import logoFooter from "../../assets/logo-footer.svg";
import styles from "./Logo.module.css";

/**
 * Logo da Digital Store.
 * @param {"header"|"footer"} variant - versão colorida (header) ou branca (footer).
 */
export default function Logo({ variant = "header" }) {
  const src = variant === "footer" ? logoFooter : logoHeader;

  return (
    <Link to="/" className={styles.logo} aria-label="Digital Store - página inicial">
      <img src={src} alt="Digital Store" width="253" height="44" />
    </Link>
  );
}
