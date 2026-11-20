/**
 * Base de produtos mockada.
 * Em um cenário real estes dados viriam de uma API.
 */

const productImages = [1, 2, 3, 4, 5].map((n) => ({
  src: `/produc-image-${n}.jpeg`,
}));

const thumb = (n) => `/product-thumb-${((n - 1) % 5) + 1}.jpeg`;

const baseDescription =
  "Tênis desenvolvido para acompanhar você do treino ao dia a dia. Cabedal em material respirável, entressola com amortecimento responsivo e solado de borracha com alta tração, garantindo conforto e estabilidade em qualquer passada.";

const raw = [
  { name: "K-Swiss V8 - Masculino", category: "Tênis", brand: "K-Swiss", gender: "Masculino", state: "Novo", price: 200, priceDiscount: 100 },
  { name: "Nike Revolution 6 - Feminino", category: "Tênis", brand: "Nike", gender: "Feminino", state: "Novo", price: 349.9, priceDiscount: 279.9 },
  { name: "Adidas Ultraboost Light", category: "Esportivo", brand: "Adidas", gender: "Unisex", state: "Novo", price: 999.99, priceDiscount: 799.9 },
  { name: "Puma Smash V2 - Masculino", category: "Casual", brand: "Puma", gender: "Masculino", state: "Usado", price: 189.9 },
  { name: "Calenciaga Speed Runner", category: "Casual", brand: "Calenciaga", gender: "Feminino", state: "Novo", price: 1499, priceDiscount: 1199 },
  { name: "Nike Air Max SC", category: "Tênis", brand: "Nike", gender: "Masculino", state: "Novo", price: 499.99 },
  { name: "Adidas Grand Court 2.0", category: "Casual", brand: "Adidas", gender: "Feminino", state: "Usado", price: 299.9, priceDiscount: 219.9 },
  { name: "K-Swiss Court Express", category: "Esportivo", brand: "K-Swiss", gender: "Unisex", state: "Novo", price: 259.9 },
  { name: "Puma Velocity Nitro 2", category: "Esportivo", brand: "Puma", gender: "Masculino", state: "Novo", price: 799.9, priceDiscount: 599.9 },
  { name: "Nike Court Vision Low", category: "Casual", brand: "Nike", gender: "Unisex", state: "Novo", price: 449.9, priceDiscount: 379.9 },
  { name: "Adidas Runfalcon 3.0", category: "Tênis", brand: "Adidas", gender: "Masculino", state: "Usado", price: 229.9 },
  { name: "Calenciaga Triple S", category: "Tênis", brand: "Calenciaga", gender: "Unisex", state: "Novo", price: 2199, priceDiscount: 1899 },
  { name: "Puma Carina Street - Feminino", category: "Casual", brand: "Puma", gender: "Feminino", state: "Novo", price: 399.9, priceDiscount: 319.9 },
  { name: "Nike Downshifter 12", category: "Esportivo", brand: "Nike", gender: "Feminino", state: "Novo", price: 379.9 },
  { name: "K-Swiss Lozan Match", category: "Casual", brand: "K-Swiss", gender: "Masculino", state: "Usado", price: 169.9, priceDiscount: 129.9 },
  { name: "Adidas Duramo SL", category: "Esportivo", brand: "Adidas", gender: "Unisex", state: "Novo", price: 349.9, priceDiscount: 289.9 },
];

export const products = raw.map((item, index) => {
  const id = index + 1;
  return {
    id,
    ...item,
    image: thumb(id),
    images: productImages,
    reference: `REF:${String(38416 + id * 7).padStart(6, "0")}`,
    stars: Number((3.8 + ((id * 3) % 12) / 10).toFixed(1)),
    rating: 40 + ((id * 37) % 160),
    description: baseDescription,
    sizes: ["39", "40", "41", "42", "43"],
    colors: ["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"],
  };
});

export function getProductById(id) {
  return products.find((product) => product.id === Number(id));
}

/** Opções dos filtros da página de listagem, derivadas dos próprios produtos. */
const uniqueOptions = (key) =>
  [...new Set(products.map((p) => p[key]))].sort().map((value) => ({ text: value, value }));

export const filterGroups = [
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
