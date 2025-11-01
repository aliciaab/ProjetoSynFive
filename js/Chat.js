const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatBox = document.getElementById("chatBox");

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const text = userInput.value.trim();
  if (text === "") return;

  // Mensagem do usuário
  const userMsg = document.createElement("div");
  userMsg.classList.add("message", "user");
  userMsg.innerHTML = `<p>${text}</p>`;
  chatBox.appendChild(userMsg);
  userInput.value = "";

  // Simulação de resposta do bot
  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.classList.add("message", "bot");

    if (text.toLowerCase().includes("lixo")) {
      botMsg.innerHTML = `<p>A coleta seletiva ocorre às terças e quintas, às 9h.<br>A coleta comum é diária, às 19h.</p>`;
    } else if (text.toLowerCase().includes("separar")) {
      botMsg.innerHTML = `<p>Separe recicláveis (papel, plástico, vidro, metal) dos resíduos orgânicos e rejeitos.</p>`;
    } else {
      botMsg.innerHTML = `<p>Posso ajudar com horários da coleta, separação do lixo ou pontos de descarte. 😊</p>`;
    }

    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 700);

  chatBox.scrollTop = chatBox.scrollHeight;
}
