import styles from "./StatusMessage.module.css";

/** Mensagem de carregamento ou erro exibida enquanto os dados da API chegam. */
export default function StatusMessage({ loading, error }) {
  if (error) {
    return (
      <p className={`${styles.status} ${styles.error}`} role="alert">
        {error}
      </p>
    );
  }

  if (loading) {
    return (
      <div className={styles.status} role="status">
        <span className={styles.spinner} aria-hidden="true" />
        Carregando produtos...
      </div>
    );
  }

  return null;
}
