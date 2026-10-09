// NOXGR Auxiliar de Tratativas - loader
// Execute somente em páginas autorizadas do Webnox.
// Não altera os controles ou procedimentos operacionais do sistema.
(() => {
  "use strict";
  const file = "https://raw.githubusercontent.com/phtxxx/noxgr-auxiliar-tratativas/main/noxgr.js";
  const id = "noxgr-auxiliar-loader";
  if (document.getElementById(id)) {
    console.info("[NOXGR] Carregamento já iniciado nesta página.");
    return;
  }
  const script = document.createElement("script");
  script.id = id;
  script.src = file;
  script.async = true;
  script.onload = () => console.info("[NOXGR] Arquivo carregado. Confira o painel na página.");
  script.onerror = () => {
    script.remove();
    console.error("[NOXGR] Não foi possível carregar noxgr.js. Verifique se o repositório é público, se o arquivo existe e se a página permite scripts externos.");
  };
  (document.head || document.documentElement).appendChild(script);
})();
