# Digital Store — Projeto Final de Front-end

Aplicação de e-commerce desenvolvida em **React** a partir da
[documentação oficial do Digital Store](https://github.com/digitalcollegebr/projeto-digital-store)
e do layout **Drip Store** no Figma.

## 👥 Equipe

Projeto desenvolvido individualmente por:

| Nome | GitHub |
| ---- | ------ |
| Igor Lucas de Almeida | [@igorlukas12](https://github.com/igorlukas12) |

## 🚀 Tecnologias

- [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- [React Router DOM 6](https://reactrouter.com/) (rotas e `NavLink`)
- CSS Modules (estilo isolado por componente) + variáveis CSS com a paleta da documentação
- Fonte Inter (Google Fonts)

## ▶️ Como rodar

```bash
npm install
npm run dev       # ambiente de desenvolvimento em http://localhost:5173
npm run build     # build de produção em /dist
npm run preview   # serve o build localmente
```

## 🗺️ Páginas e rotas

| Rota | Página | Descrição |
| ---- | ------ | --------- |
| `/` | `HomePage` | Slide de banners, coleções em destaque e produtos em alta |
| `/products` | `ProductListingPage` | Listagem com busca (`?filter=termo`), ordenação e filtros |
| `/produtos` | — | Redireciona para `/products` (a documentação cita as duas rotas) |
| `/product/:id` | `ProductViewPage` | Galeria com miniaturas, BuyBox, opções e produtos recomendados |
| `*` | `NotFoundPage` | Página 404 |

## 🧩 Componentes (requisitos mínimos)

| Componente | Props principais | Observações |
| ---------- | ---------------- | ----------- |
| `Layout` (`src/pages`) | `children` | Header + conteúdo + Footer |
| `Header` | — | Logo, busca (Enter ou lupa → `/products?filter=`), Cadastre-se/Entrar, carrinho, navegação com `NavLink` ativo; menu hambúrguer no mobile |
| `Logo` | `variant` (`header` \| `footer`) | 253×44 px; versão branca no rodapé |
| `Footer` / `FooterInformation` | `title`, `informations[{ text, link }]` | Descrição, redes sociais, blocos de links e copyright |
| `Section` | `title`, `titleAlign`, `link{ text, href }`, `children` | |
| `ProductCard` | `image` (ou `imagem`), `name`, `price`, `priceDiscount` | Preço riscado quando há desconto + selo de % OFF |
| `ProductListing` | `products[]`, `columns` | Grade responsiva de `ProductCard` |
| `Gallery` | `images[{ src }]`, `width`, `height`, `radius`, `showThumbs`, `className` | Setas desabilitadas no primeiro/último slide, transição deslizante, miniaturas 117×95 com borda primária |
| `FilterGroup` | `title`, `inputType` (`checkbox` \| `radio`), `options[{ text, value }]` | Inputs 22×22 com `accent-color` primária |
| `ProductOptions` | `options[]`, `shape` (`square` \| `circle`), `radius`, `type` (`text` \| `color`) | Seleção com borda primária de 2 px |
| `BuyBox` | `name`, `reference`, `stars`, `rating`, `price`, `priceDiscount`, `description`, `children` | Botão "Comprar" na cor warning |

## ✨ Funcionalidades

- Busca acessível no header, sem distinção de acentos/maiúsculas (ex.: `tenis` encontra "Tênis")
- Ordenação por **menor** e **maior preço** (considerando o preço com desconto)
- Filtros combináveis por marca, categoria, gênero (checkbox) e estado (radio), com contador de resultados no título e botão "Limpar"
- Layout responsivo (desktop, tablet e mobile)
- Rolagem para o topo ao trocar de página e página 404

## 📁 Estrutura

```
src/
├── assets/            # logos, ícones e SVGs das redes sociais
├── components/        # um diretório por componente (JSX + CSS Module)
├── data/              # produtos mockados e dados de navegação
├── pages/             # Layout e páginas (apenas composição de componentes)
├── styles/global.css  # reset e variáveis de cor
├── utils/format.js    # formatação de preço (R$) e cálculo de desconto
├── App.jsx            # definição das rotas
└── main.jsx           # ponto de entrada
public/                # imagens de banners, coleções e produtos
```

## 🎨 Paleta

`primary #C92071` · `secondary #B5B6F2` · `tertiary #991956` · `error #EE4266` ·
`success #52CA76` · `warning #F6AA1C` · `dark-gray #1F1F1F` · `dark-gray-2 #474747` ·
`dark-gray-3 #666666` · `light-gray #8F8F8F` · `light-gray-2 #CCCCCC` · `light-gray-3 #F5F5F5`
