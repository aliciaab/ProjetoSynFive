// Exemplo simples: ao clicar em um card, pode exibir detalhes.
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    alert(`📍 ${card.querySelector("h3").textContent}`);
  });
});
