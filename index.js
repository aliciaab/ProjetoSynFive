window.addEventListener("load", () => {
  const splash = document.getElementById("splash");

  const splashDuration = 2000; 
  const fadeDuration = 600;    

  setTimeout(() => {
    splash.style.transition = `opacity ${fadeDuration}ms ease`;
    splash.style.opacity = "0";

    setTimeout(() => {
      splash.style.display = "none";
      window.location.href = "./html/Permissao.html"; 
    }, fadeDuration);
  }, splashDuration);
});
