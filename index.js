window.addEventListener("load", () => {
  const splash = document.getElementById("splash");

  const splashDuration = 2000; // Tempo que a splash aparece (2s)
  const fadeDuration = 600;    // Duração do fade-out (0.6s)

  setTimeout(() => {
    splash.style.transition = `opacity ${fadeDuration}ms ease`;
    splash.style.opacity = "0";

    setTimeout(() => {
      splash.style.display = "none";
      // Redireciona para a página de permissões
      window.location.href = "./html/Permissao.html"; 
    }, fadeDuration);
  }, splashDuration);
});
