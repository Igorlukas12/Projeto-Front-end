const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

/** Formata um número como moeda brasileira (ex.: 219 -> "R$ 219,00"). */
export function formatPrice(value) {
  return currency.format(value);
}

/** Calcula o percentual de desconto arredondado entre dois preços. */
export function discountPercent(price, priceDiscount) {
  if (!priceDiscount || priceDiscount >= price) return 0;
  return Math.round(((price - priceDiscount) / price) * 100);
}
