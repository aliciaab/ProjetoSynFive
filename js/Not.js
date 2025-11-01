// Redireciona para a Home ao clicar na logo
const logo = document.querySelector(".header .logo");

if (logo) {
  logo.addEventListener("click", () => {
    window.location.href = "./../html/Home.html"; 
  });
}

// Alerta ao clicar em qualquer card
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    alert(`📍 ${card.querySelector("h3").textContent}`);
  });
});
