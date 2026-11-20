import { Link } from "react-router-dom";
import Layout from "./Layout";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage({ message = "Página não encontrada." }) {
  return (
    <Layout>
      <div className={`container ${styles.notFound}`}>
        <h1>404</h1>
        <p>{message}</p>
        <Link to="/">Voltar para a Home</Link>
      </div>
    </Layout>
  );
}
