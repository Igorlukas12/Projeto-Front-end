import { Link } from "react-router-dom";
import { discountPercent, formatPrice } from "../../utils/format";
import styles from "./ProductCard.module.css";

/**
 * Card de produto.
 * @param {string} image - URL da imagem (também aceita `imagem`, como na documentação).
 * @param {string} name
 * @param {number} price
 * @param {number} [priceDiscount]
 * @param {string} [category]
 * @param {number|string} [id] - quando informado o card vira um link para o produto.
 */
export default function ProductCard({ id, image, imagem, name, category, price, priceDiscount }) {
  const src = image ?? imagem;
  const hasDiscount = priceDiscount != null && priceDiscount < price;
  const percent = discountPercent(price, priceDiscount);

  const content = (
    <>
      <div className={styles.imageBox}>
        {percent > 0 && <span className={styles.badge}>{percent}% OFF</span>}
        <img src={src} alt={name} width="292" height="321" loading="lazy" />
      </div>
      <div className={styles.info}>
        {category && <span className={styles.category}>{category}</span>}
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.prices}>
          <span className={hasDiscount ? styles.oldPrice : styles.price}>{formatPrice(price)}</span>
          {hasDiscount && <span className={styles.price}>{formatPrice(priceDiscount)}</span>}
        </div>
      </div>
    </>
  );

  return id != null ? (
    <Link to={`/product/${id}`} className={styles.card}>
      {content}
    </Link>
  ) : (
    <div className={styles.card}>{content}</div>
  );
}
