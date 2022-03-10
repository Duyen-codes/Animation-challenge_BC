const toggleBgButton = document.querySelector(".toggle-bg-btn");
const middleButton = document.querySelector(".middle-btn");
const offButton = document.querySelector(".off-btn");
toggleBgButton.addEventListener("click", () => {
  middleButton.classList.toggle("move");
  offButton.classList.toggle("push");
  if (
    middleButton.classList.contains("move") &&
    offButton.classList.contains("push")
  ) {
    document.body.style.animationPlayState = "paused";
  } else {
    document.body.style.animationPlayState = "running";
  }
});
