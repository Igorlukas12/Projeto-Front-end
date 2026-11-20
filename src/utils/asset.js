/**
 * Monta a URL de um arquivo da pasta /public respeitando o "base" do Vite.
 * Necessário para o deploy em subpasta (ex.: GitHub Pages em /Projeto-Front-end/).
 */
export function asset(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
