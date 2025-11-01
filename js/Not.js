// Redireciona para a home ao clicar no logo
const logo = document.querySelector(".header .logo");

if (logo) {
  logo.addEventListener("click", () => {
    // Caminho relativo da página de notificações para a home
    window.location.href = "home.html"; 
  });
}

// Exemplo: alerta ao clicar em um card
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    alert(`📍 ${card.querySelector("h3").textContent}`);
  });
});
