import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "./Layout";
import Section from "../components/Section/Section";
import ProductListing from "../components/ProductListing/ProductListing";
import FilterGroup from "../components/FilterGroup/FilterGroup";
import { filterGroups, products } from "../data/products";
import styles from "./ProductListingPage.module.css";

const SORT_OPTIONS = [
  { value: "lowest", text: "Menor preço" },
  { value: "highest", text: "Maior preço" },
];

const emptyFilters = { brand: [], category: [], gender: [], state: [] };

/** Remove acentos e deixa minúsculo para comparar termos de busca. */
const normalize = (text) =>
  text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();

const finalPrice = (product) => product.priceDiscount ?? product.price;

export default function ProductListingPage() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("filter") ?? "";

  const [sort, setSort] = useState("lowest");
  const [filters, setFilters] = useState(emptyFilters);
  const [filtersOpen, setFiltersOpen] = useState(false);

  function handleFilterChange(key, inputType, value, checked) {
    setFilters((current) => {
      if (inputType === "radio") {
        return { ...current, [key]: value ? [value] : [] };
      }
      const values = checked ? [...current[key], value] : current[key].filter((item) => item !== value);
      return { ...current, [key]: values };
    });
  }

  const visibleProducts = useMemo(() => {
    const term = normalize(searchTerm.trim());

    return products
      .filter((product) => {
        if (term) {
          const haystack = normalize(`${product.name} ${product.category} ${product.brand}`);
          if (!haystack.includes(term)) return false;
        }
        return Object.entries(filters).every(
          ([key, selected]) => selected.length === 0 || selected.includes(product[key])
        );
      })
      .sort((a, b) => (sort === "lowest" ? finalPrice(a) - finalPrice(b) : finalPrice(b) - finalPrice(a)));
  }, [searchTerm, filters, sort]);

  const total = visibleProducts.length;
  const title = searchTerm
    ? `Resultados para "${searchTerm}" - ${total} ${total === 1 ? "produto" : "produtos"}`
    : `${total} ${total === 1 ? "produto encontrado" : "produtos encontrados"}`;

  const hasActiveFilters = Object.values(filters).some((values) => values.length > 0);

  return (
    <Layout>
      <div className={`container ${styles.page}`}>
        <aside className={styles.sidebar}>
          <label className={styles.sort}>
            <span>Ordenar por</span>
            <select value={sort} onChange={(event) => setSort(event.target.value)}>
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </label>

          <button
            type="button"
            className={styles.toggleFilters}
            aria-expanded={filtersOpen}
            onClick={() => setFiltersOpen((open) => !open)}
          >
            {filtersOpen ? "Ocultar filtros" : "Mostrar filtros"}
          </button>

          <div className={`${styles.filters} ${filtersOpen ? styles.filtersOpen : ""}`}>
            <div className={styles.filtersHeader}>
              <h2>Filtrar por</h2>
              {hasActiveFilters && (
                <button type="button" onClick={() => setFilters(emptyFilters)}>
                  Limpar
                </button>
              )}
            </div>
            <hr />
            {filterGroups.map((group) => (
              <FilterGroup
                key={group.key}
                title={group.title}
                inputType={group.inputType}
                options={group.options}
                selected={group.inputType === "radio" && filters[group.key].length === 0 ? [""] : filters[group.key]}
                onChange={(value, checked) => handleFilterChange(group.key, group.inputType, value, checked)}
              />
            ))}
          </div>
        </aside>

        <Section title={title} titleAlign="left" className={styles.results}>
          <ProductListing products={visibleProducts} columns={3} />
        </Section>
      </div>
    </Layout>
  );
}
