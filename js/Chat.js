const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatBox = document.getElementById("chatBox");
const suggestions = document.querySelectorAll(".suggestions button");
const navButtons = document.querySelectorAll(".nav-item");
function sendMessage(text) {
  if (!text) return;

  const userMsg = document.createElement("div");
  userMsg.classList.add("message", "user");
  userMsg.innerHTML = `<p>${text}</p>`;
  chatBox.appendChild(userMsg);

  if (typeof text === "string" && userInput.value !== text) userInput.value = "";

  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.classList.add("message", "bot");

    if (text.toLowerCase().includes("lixo")) {
      botMsg.innerHTML = `<p>A coleta seletiva ocorre às terças e quintas, às 9h.<br>A coleta comum é diária, às 19h.</p>`;
    } else if (text.toLowerCase().includes("separar")) {
      botMsg.innerHTML = `<p>Separe recicláveis (papel, plástico, vidro, metal) dos resíduos orgânicos e rejeitos.</p>`;
    } else if (text.toLowerCase().includes("pontos")) {
      botMsg.innerHTML = `<p>Os pontos de descarte estão localizados nos principais bairros da cidade. Consulte o mapa.</p>`;
    } else {
      botMsg.innerHTML = `<p>Posso ajudar com horários da coleta, separação do lixo ou pontos de descarte. 😊</p>`;
    }

    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 700);

  chatBox.scrollTop = chatBox.scrollHeight;
}

sendBtn.addEventListener("click", () => sendMessage(userInput.value.trim()));
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage(userInput.value.trim());
});

suggestions.forEach(btn => {
  btn.addEventListener("click", () => sendMessage(btn.dataset.msg));
});

navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    navButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const link = btn.dataset.link;
    if (link) {
      window.location.href = link;
    }
  });
});

const homeBtn = document.querySelector(".bottom-nav .nav-item:first-child");
homeBtn.dataset.link = "./home.html"; 
