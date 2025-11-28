
let step = 1;

function showStep(n) {
  document.querySelectorAll(".step").forEach((s, i) => {
    s.style.display = i + 1 === n ? "block" : "none";
  });
}

function nextStep() {
  if (step === 1) {
    let name = document.getElementById("name").value.trim();
    if (name === "") return alert("Name required!");
  }
  if (step === 2) {
    let email = document.getElementById("email").value.trim();
    if (!email.includes("@")) return alert("Invalid email!");
  }
  step++;
  if (step > 3) {
    showSummary();
  } else {
    showStep(step);
  }
}

function prevStep() {
  if (step > 1) step--;
  showStep(step);
}

function showSummary() {
  document.getElementById("summary").innerHTML =
    `Name: ${document.getElementById("name").value}<br>
     Email: ${document.getElementById("email").value}`;

  document.querySelector(".steps").style.display = "none";
  document.getElementById("summaryBox").style.display = "block";
}
