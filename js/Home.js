// Efeito simples de troca de menu ativo
const navButtons = document.querySelectorAll(".nav-item");

navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    navButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
