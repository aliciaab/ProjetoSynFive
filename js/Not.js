document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    alert(`📍 ${card.querySelector("h3").textContent}`);
  });
});
