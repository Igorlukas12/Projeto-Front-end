import { Link } from "react-router-dom";
import Layout from "./Layout";
import Gallery from "../components/Gallery/Gallery";
import Section from "../components/Section/Section";
import ProductListing from "../components/ProductListing/ProductListing";
import StatusMessage from "../components/StatusMessage/StatusMessage";
import useProducts from "../hooks/useProducts";
import { featuredCollections, homeSlides } from "../data/navigation";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const { products, loading, error } = useProducts();
  const trendingProducts = products.slice(0, 8);

  return (
    <Layout>
      <Gallery images={homeSlides} width="1440" height="681" className={styles.hero} />

      <div className={`container ${styles.content}`}>
        <Section title="Coleções em destaque" titleAlign="center">
          <div className={styles.collections}>
            {featuredCollections.map((collection) => (
              <Link key={collection.src} to={collection.to} className={styles.collection}>
                <img src={collection.src} alt={collection.alt} width="405" height="251" />
                <span className={styles.collectionBadge}>{collection.discount}</span>
                <span className={styles.collectionButton}>Comprar</span>
              </Link>
            ))}
          </div>
        </Section>

        <Section title="Produtos em alta" titleAlign="left" link={{ text: "Ver todos", href: "/products" }}>
          <StatusMessage loading={loading} error={error} />
          {!loading && !error && <ProductListing products={trendingProducts} />}
        </Section>
      </div>
    </Layout>
  );
}
