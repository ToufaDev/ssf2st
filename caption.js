document.getElementById("help").addEventListener("click", () => {
  document.getElementById("help-wrapper").classList.add("visible");
  document.getElementById("canvas-zone").classList.add("blur");
});

document.getElementById("help-close").addEventListener("click", () => {
  document.getElementById("help-wrapper").classList.remove("visible");
  document.getElementById("canvas-zone").classList.remove("blur");
});
