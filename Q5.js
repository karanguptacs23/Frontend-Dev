
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");

  document.getElementById("gallery").addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
      modal.style.display = "flex";
      modalImg.src = e.target.src;
    }
  });

  modal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modalImg.addEventListener("click", (e) => e.stopPropagation());
});
