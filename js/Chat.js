const chatBox = document.getElementById("chatBox");
const faqButtons = document.getElementById("faqButtons");

// Estado do chat
let step = 0;
let userData = { bairro: "", tempo: "" };

function createMessage(text, sender = "bot") {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.innerHTML = `<p>${text}</p>`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function showOptions(options) {
  faqButtons.innerHTML = "";
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt.text;
    btn.dataset.value = opt.value;
    btn.addEventListener("click", () => handleStep(opt.value));
    faqButtons.appendChild(btn);
  });
}

function handleStep(value) {
  // Cria mensagem do usuário
  createMessage(value, "user");

  if(step === 0){
    // Passo 1: Pergunta inicial
    createMessage("Faz quanto tempo que o caminhão de lixo não passa? Entre em contato com a prefeitura local para relatar o problema.");
    step++;
    setTimeout(() => {
      createMessage("Qual bairro você mora?");
      showOptions([
        { text: "Francisco Beltrão", value: "Francisco Beltrão" }
      ]);
    }, 500);

  } else if(step === 1){
    // Passo 2: Seleção do bairro
    userData.bairro = value;
    step++;
    setTimeout(() => {
      createMessage("Há quanto tempo isso está acontecendo?");
      showOptions([
        { text: "1 a 2 semanas", value: "1 a 2 semanas" },
        { text: "3 a 5 semanas", value: "3 a 5 semanas" },
        { text: "Mais de 5 semanas", value: "Mais de 5 semanas" }
      ]);
    }, 500);

  } else if(step === 2){
    // Passo 3: Seleção do tempo
    userData.tempo = value;
    step++;
    setTimeout(() => {
      createMessage(`Obrigado! Você relatou que no bairro ${userData.bairro} o caminhão de lixo não passa há ${userData.tempo}. A prefeitura será notificada.`);
      faqButtons.innerHTML = ""; // Remove botões finais
    }, 500);
  }
}

// Inicia o chat com o botão inicial
faqButtons.querySelector("button").addEventListener("click", () => handleStep("Não recolhem o lixo na minha rua."));

const navButtons = document.querySelectorAll(".nav-item");
navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    navButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    window.location.href = btn.dataset.link;
  });
});