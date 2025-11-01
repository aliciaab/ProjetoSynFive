document.addEventListener("DOMContentLoaded", () => {
  const sendBtn = document.getElementById("sendBtn");
  const userInput = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");
  const suggestions = document.querySelectorAll(".suggestions button");
  const navButtons = document.querySelectorAll(".bottom-nav .nav-item");

  // Função para enviar mensagem
  function sendMessage(text) {
    if (!text) return;

    // Mensagem do usuário
    const userMsg = document.createElement("div");
    userMsg.classList.add("message", "user");
    userMsg.innerHTML = `<p>${text}</p>`;
    chatBox.appendChild(userMsg);
    userInput.value = "";

    // Resposta do bot
    setTimeout(() => {
      const botMsg = document.createElement("div");
      botMsg.classList.add("message", "bot");

      const msgLower = text.toLowerCase();
      if (msgLower.includes("lixo")) {
        botMsg.innerHTML = `<p>Separe recicláveis (papel, plástico, vidro, metal) dos resíduos orgânicos e rejeitos.</p>`;
      } else if (msgLower.includes("horário") || msgLower.includes("coleta")) {
        botMsg.innerHTML = `<p>A coleta seletiva ocorre às terças e quintas, às 9h.<br>A coleta comum é diária, às 19h.</p>`;
      } else if (msgLower.includes("ponto")) {
        botMsg.innerHTML = `<p>Os pontos de descarte estão localizados nos principais bairros da cidade. Consulte o mapa.</p>`;
      } else {
        botMsg.innerHTML = `<p>Posso ajudar com horários da coleta, separação do lixo ou pontos de descarte. 😊</p>`;
      }

      chatBox.appendChild(botMsg);
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 700);

    chatBox.scrollTop = chatBox.scrollHeight;
  }

  // Eventos de envio
  sendBtn.addEventListener("click", () => sendMessage(userInput.value.trim()));
  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage(userInput.value.trim());
  });

  // Sugestões rápidas
  suggestions.forEach(btn => {
    btn.addEventListener("click", () => sendMessage(btn.dataset.msg));
  });

  // Navegação inferior
  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      navButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const link = btn.dataset.link;
      if (link) window.location.href = link;
    });
  });

  // Define os links corretos para cada botão
  navButtons[0].dataset.link = "./../html/Home.html";   // Home
  navButtons[1].dataset.link = "./../html/Inform.html"; // Informações
  navButtons[2].dataset.link = "./../html/Chat.html";   // Chat

  // Define botão ativo como Chat
  navButtons.forEach(btn => btn.classList.remove("active"));
  navButtons[2].classList.add("active");
});
