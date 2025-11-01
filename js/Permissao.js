const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (prefersDark) {
  document.body.classList.add("dark");
}

document.getElementById("continueBtn").addEventListener("click", () => {
  alert("Permissões aceitas! (Aqui você pode colocar a lógica real)");
});
