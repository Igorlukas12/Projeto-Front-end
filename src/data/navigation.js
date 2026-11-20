export const mainNavLinks = [
  { text: "Home", to: "/" },
  { text: "Produtos", to: "/products" },
  { text: "Categorias", to: "/categories" },
  { text: "Meus Pedidos", to: "/orders" },
];

export const footerInformations = [
  {
    title: "Informação",
    informations: [
      { text: "Sobre Drip Store", link: "/about" },
      { text: "Segurança", link: "/security" },
      { text: "Wishlist", link: "/wishlist" },
      { text: "Blog", link: "/blog" },
      { text: "Trabalhe conosco", link: "/careers" },
      { text: "Meus Pedidos", link: "/orders" },
    ],
  },
  {
    title: "Categorias",
    informations: [
      { text: "Camisetas", link: "/products?filter=camisetas" },
      { text: "Calças", link: "/products?filter=calças" },
      { text: "Bonés", link: "/products?filter=bonés" },
      { text: "Headphones", link: "/products?filter=headphones" },
      { text: "Tênis", link: "/products?filter=tênis" },
    ],
  },
  {
    title: "Contato",
    informations: [
      { text: "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161", link: "https://maps.google.com/?q=Av.+Santos+Dumont,+1510+Fortaleza" },
      { text: "(85) 3051-3411", link: "tel:+558530513411" },
    ],
  },
];

export const homeSlides = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({
  src: `/home-slide-${n}.jpeg`,
}));

export const featuredCollections = [
  { src: "/collection-1.png", alt: "Coleção de camisetas", discount: "30% OFF", to: "/products?filter=camiseta" },
  { src: "/collection-2.png", alt: "Coleção de tênis", discount: "30% OFF", to: "/products?filter=tênis" },
  { src: "/collection-3.png", alt: "Coleção de headphones", discount: "30% OFF", to: "/products?filter=headphone" },
];
