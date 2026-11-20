import { useState } from "react";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import Logo from "../Logo/Logo";
import cartIcon from "../../assets/mini-cart.svg";
import searchIcon from "../../assets/search.svg";
import { mainNavLinks } from "../../data/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("filter") ?? "");
  const [menuOpen, setMenuOpen] = useState(false);

  function handleSearch(event) {
    event.preventDefault();
    const term = search.trim();
    navigate(term ? `/products?filter=${encodeURIComponent(term)}` : "/products");
    setMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.top}`}>
        <button
          type="button"
          className={styles.menuButton}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <Logo />

        <form className={styles.search} role="search" onSubmit={handleSearch}>
          <label htmlFor="header-search" className="sr-only">
            Pesquisar produto
          </label>
          <input
            id="header-search"
            type="search"
            placeholder="Pesquisar produto..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <button type="submit" aria-label="Pesquisar">
            <img src={searchIcon} alt="" width="24" height="24" />
          </button>
        </form>

        <div className={styles.actions}>
          <Link to="/register" className={styles.register}>
            Cadastre-se
          </Link>
          <Link to="/login" className={styles.login}>
            Entrar
          </Link>
        </div>

        <span className={styles.cart} aria-label="Carrinho">
          <img src={cartIcon} alt="" width="24" height="24" />
        </span>
      </div>

      <nav
        className={`container ${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
        aria-label="Navegação principal"
      >
        <ul>
          {mainNavLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) => (isActive ? styles.active : undefined)}
                onClick={() => setMenuOpen(false)}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className={styles.mobileActions}>
          <Link to="/login" className={styles.login}>
            Entrar
          </Link>
          <Link to="/register" className={styles.register}>
            Cadastre-se
          </Link>
        </div>
      </nav>
    </header>
  );
}
