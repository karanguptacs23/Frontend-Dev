
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("productInput");
  const addBtn = document.getElementById("addBtn");
  const list = document.getElementById("productList");

  addBtn.addEventListener("click", () => {
    if (input.value.trim() === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
      <span class="text">${input.value}</span>
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    `;
    list.appendChild(li);
    input.value = "";
  });

  list.addEventListener("click", (e) => {
    const li = e.target.closest("li");

    if (e.target.classList.contains("delete")) {
      li.remove();
    }

    if (e.target.classList.contains("edit")) {
      const span = li.querySelector(".text");
      const oldText = span.textContent;
      span.outerHTML = `<input class="editInput" value="${oldText}">`;
      e.target.textContent = "Save";
      e.target.classList.remove("edit");
      e.target.classList.add("save");
    }

    if (e.target.classList.contains("save")) {
      const inputBox = li.querySelector(".editInput");
      const newText = inputBox.value.trim();
      inputBox.outerHTML = `<span class="text">${newText}</span>`;
      e.target.textContent = "Edit";
      e.target.classList.remove("save");
      e.target.classList.add("edit");
    }
  });
});
