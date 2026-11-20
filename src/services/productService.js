import { asset } from "../utils/asset";

const API_URL = asset("api/products.json");

/** Ajusta os caminhos das imagens para o ambiente atual (local ou deploy). */
function normalizeProduct(product) {
  return {
    ...product,
    image: asset(product.image),
    images: product.images.map((image) => ({ ...image, src: asset(image.src) })),
  };
}

let cache = null;

/** Busca todos os produtos na API (com cache em memória entre páginas). */
export async function getProducts() {
  if (cache) return cache;

  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(`Erro ao carregar produtos (HTTP ${response.status})`);
  }

  const data = await response.json();
  cache = data.map(normalizeProduct);
  return cache;
}

/** Busca um produto pelo id. Retorna `undefined` se não existir. */
export async function getProductById(id) {
  const products = await getProducts();
  return products.find((product) => product.id === Number(id));
}

/** Gera as opções dos filtros da listagem a partir dos próprios produtos. */
export function buildFilterGroups(products) {
  const uniqueOptions = (key) =>
    [...new Set(products.map((p) => p[key]))].sort().map((value) => ({ text: value, value }));

  return [
    { key: "brand", title: "Marca", inputType: "checkbox", options: uniqueOptions("brand") },
    { key: "category", title: "Categoria", inputType: "checkbox", options: uniqueOptions("category") },
    { key: "gender", title: "Gênero", inputType: "checkbox", options: uniqueOptions("gender") },
    {
      key: "state",
      title: "Estado",
      inputType: "radio",
      options: [{ text: "Todos", value: "" }, ...uniqueOptions("state")],
    },
  ];
}
