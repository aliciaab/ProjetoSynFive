const navButtons = document.querySelectorAll(".nav-item");
const chatBtn = document.getElementById("chatBtn");

navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    navButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Redireciona para página de Chat
chatBtn.addEventListener("click", () => {
  window.location.href = "Chat.html"; // Coloque o caminho correto da sua página
});
const notifBtn = document.getElementById("notifBtn");

notifBtn.addEventListener("click", () => {
  window.location.href = "Not.html"; // Substitua pelo caminho correto
});
