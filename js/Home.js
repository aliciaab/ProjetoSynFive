document.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelectorAll(".bottom-nav .nav-item");

  // Navegação inferior
  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      navButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const link = btn.getAttribute("data-link");
      if (link) window.location.href = link;
    });
  });

  // Botão "Ir para o Mapa" ou Home
  const irMapaBtn = document.getElementById("irMapa");
  if (irMapaBtn) {
    irMapaBtn.addEventListener("click", () => {
      window.location.href = "./../html/Home.html";
    });
  }

  // Botão de Notificações
  const notifBtn = document.getElementById("notifBtn");
  if (notifBtn) {
    notifBtn.addEventListener("click", () => {
      window.location.href = "./../html/Not.html";
    });
  }
});
