import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "./Layout";
import Gallery from "../components/Gallery/Gallery";
import BuyBox from "../components/BuyBox/BuyBox";
import ProductOptions from "../components/ProductOptions/ProductOptions";
import Section from "../components/Section/Section";
import ProductListing from "../components/ProductListing/ProductListing";
import StatusMessage from "../components/StatusMessage/StatusMessage";
import NotFoundPage from "./NotFoundPage";
import useProducts from "../hooks/useProducts";
import styles from "./ProductViewPage.module.css";

export default function ProductViewPage() {
  const { id } = useParams();
  const { products, loading, error } = useProducts();
  const [feedback, setFeedback] = useState({ id: null, message: "" });

  if (loading || error) {
    return (
      <Layout>
        <div className="container">
          <StatusMessage loading={loading} error={error} />
        </div>
      </Layout>
    );
  }

  const product = products.find((item) => item.id === Number(id));
  if (!product) return <NotFoundPage message="Produto não encontrado." />;

  const recommended = products.filter((item) => item.id !== product.id).slice(0, 4);

  return (
    <Layout>
      <div className="container">
        <nav className={styles.breadcrumb} aria-label="Você está em">
          <Link to="/">Home</Link> / <Link to="/products">Produtos</Link> /{" "}
          <Link to={`/products?filter=${encodeURIComponent(product.category)}`}>{product.category}</Link> /{" "}
          <span>{product.name}</span>
        </nav>

        <div className={styles.product}>
          {/* key força o reset do slide ao navegar entre produtos */}
          <Gallery
            key={product.id}
            images={product.images}
            showThumbs
            width="700px"
            height="570px"
            radius="4px"
            className={styles.gallery}
          />

          <div className={styles.buyBox}>
            <BuyBox
              key={product.id}
              name={product.name}
              reference={`${product.category} | ${product.brand} | ${product.reference}`}
              stars={product.stars}
              rating={product.rating}
              price={product.price}
              priceDiscount={product.priceDiscount}
              description={product.description}
              onBuy={() => setFeedback({ id: product.id, message: `${product.name} adicionado ao carrinho!` })}
            >
              <ProductOptions title="Tamanho" options={product.sizes} shape="square" radius="4px" type="text" />
              <ProductOptions title="Cor" options={product.colors} shape="circle" type="color" />
            </BuyBox>
            {feedback.id === product.id && (
              <p className={styles.feedback} role="status">
                {feedback.message}
              </p>
            )}
          </div>
        </div>

        <Section
          title="Produtos recomendados"
          titleAlign="left"
          link={{ text: "Ver todos", href: "/products" }}
          className={styles.recommended}
        >
          <ProductListing products={recommended} />
        </Section>
      </div>
    </Layout>
  );
}
