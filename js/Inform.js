document.addEventListener("DOMContentLoaded", () => {
  // Botão "Ir para o Mapa"
  const irMapaBtn = document.getElementById("irMapa");
  if (irMapaBtn) {
    irMapaBtn.addEventListener("click", () => {
      window.location.href = "./../html/Home.html"; // Redireciona para Home
    });
  }

  // Navegação inferior
  const navItems = document.querySelectorAll(".bottom-nav .nav-item");
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      const link = item.getAttribute("data-link");
      if (link) {
        window.location.href = link;
      }
    });
  });
});
