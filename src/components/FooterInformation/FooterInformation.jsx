import { Link } from "react-router-dom";
import styles from "./FooterInformation.module.css";

const isExternal = (link) => /^(https?:|tel:|mailto:)/.test(link);

/**
 * Bloco de links do rodapé.
 * @param {string} title - título do bloco.
 * @param {{text: string, link: string}[]} informations - itens exibidos.
 */
export default function FooterInformation({ title, informations = [] }) {
  return (
    <div className={styles.block}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {informations.map((item) => (
          <li key={item.text}>
            {isExternal(item.link) ? (
              <a href={item.link} target={item.link.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                {item.text}
              </a>
            ) : (
              <Link to={item.link}>{item.text}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
