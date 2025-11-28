// Q2 Employee Status Dashboard (XMLHttpRequest)
function loadEmployees() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "/employees");
  xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);
    let html = "";
    data.forEach(emp => {
      html += `
        <div>
          <span>${emp.name}</span>
          <input type="checkbox" ${emp.status === "active" ? "checked" : ""} 
            onchange="toggleStatus(${emp.id}, this)">
        </div>`;
    });
    document.getElementById("list").innerHTML = html;
  };
  xhr.send();
}

function toggleStatus(id, checkbox) {
  let newStatus = checkbox.checked ? "active" : "inactive";

  let xhr = new XMLHttpRequest();
  xhr.open("PATCH", `/employees/${id}`);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = function () {
    if (xhr.status >= 400) {
      alert("Error updating status");
      checkbox.checked = !checkbox.checked;
    }
  };

  xhr.send(JSON.stringify({ status: newStatus }));
}