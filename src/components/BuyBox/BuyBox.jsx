import starIcon from "../../assets/star-icon.svg";
import { formatPrice } from "../../utils/format";
import styles from "./BuyBox.module.css";

/**
 * Caixa de compra com informações do produto.
 * Aceita children (ex.: <ProductOptions />) exibidos antes do botão "Comprar".
 */
export default function BuyBox({ name, reference, stars, rating, price, priceDiscount, description, children, onBuy }) {
  const hasDiscount = priceDiscount != null && priceDiscount < price;

  return (
    <div className={styles.buyBox}>
      <h1 className={styles.name}>{name}</h1>
      {reference && <p className={styles.reference}>{reference}</p>}

      <div className={styles.rating}>
        <span className={styles.stars}>
          {stars}
          <img src={starIcon} alt="" width="16" height="16" />
        </span>
        <span className={styles.reviews}>({rating} avaliações)</span>
      </div>

      <div className={styles.prices}>
        <span className={styles.price}>{formatPrice(hasDiscount ? priceDiscount : price)}</span>
        {hasDiscount && <span className={styles.oldPrice}>{formatPrice(price)}</span>}
      </div>

      {description && (
        <div className={styles.description}>
          <h2>Descrição do produto</h2>
          <p>{description}</p>
        </div>
      )}

      {children && <div className={styles.children}>{children}</div>}

      <button type="button" className={styles.buy} onClick={onBuy}>
        Comprar
      </button>
    </div>
  );
}
