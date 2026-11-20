import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductListing.module.css";

/**
 * Lista de produtos renderizada em grade.
 * @param {object[]} products - [{ id, name, image, price, priceDiscount }]
 * @param {number} [columns=4] - número de colunas no desktop.
 */
export default function ProductListing({ products = [], columns = 4 }) {
  if (products.length === 0) {
    return <p className={styles.empty}>Nenhum produto encontrado.</p>;
  }

  return (
    <div className={styles.grid} style={{ "--columns": columns }}>
      {products.map((product) => (
        <ProductCard
          key={product.id ?? product.name}
          id={product.id}
          image={product.image}
          name={product.name}
          category={product.category}
          price={product.price}
          priceDiscount={product.priceDiscount}
        />
      ))}
    </div>
  );
}
