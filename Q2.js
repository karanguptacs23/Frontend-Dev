
document.addEventListener("DOMContentLoaded", () => {
  const ta = document.getElementById("msg");
  const counter = document.getElementById("counter");
  const reset = document.getElementById("resetBtn");
  const max = 100;

  ta.addEventListener("input", () => {
    let length = ta.value.length;
    let remain = max - length;

    if (remain <= 0) {
      ta.value = ta.value.slice(0, max);
      remain = 0;
    }

    counter.textContent = remain;

    counter.style.color = remain === 0 ? "red" : remain <= 20 ? "orange" : "black";
  });

  reset.addEventListener("click", () => {
    ta.value = "";
    counter.textContent = max;
    counter.style.color = "black";
  });
});
