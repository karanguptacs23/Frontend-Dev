
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".theme-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const theme = btn.dataset.theme;
      document.body.setAttribute("class", theme);
      document.body.setAttribute("data-theme", theme);
    });
  });
});
