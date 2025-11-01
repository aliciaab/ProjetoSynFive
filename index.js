// Exibir tela de splash por 2 segundos e depois mostrar as permissões
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("splash").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("splash").style.display = "none";
      const permissions = document.getElementById("permissions");
      permissions.style.display = "flex";
      document.body.style.background = "#e8f5e9";
    }, 600);
  }, 2000);
});
