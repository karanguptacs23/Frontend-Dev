// Q3 Task Manager (jQuery AJAX + Filters)
function loadTasks(filter = "") {
  $.ajax({
    url: `/tasks${filter}`,
    method: "GET",
    success: function (data) {
      let html = data.map(t => `
        <div>
          <input type="checkbox" ${t.completed ? "checked" : ""} 
            onclick="toggle(${t.id}, this)">
          ${t.title} - ${t.priority}
        </div>`).join('');
      $('#taskList').html(html);
    }
  });
}

function toggle(id, checkbox) {
  $.ajax({
    url: `/tasks/${id}`,
    method: "PATCH",
    data: JSON.stringify({ completed: checkbox.checked }),
    contentType: "application/json"
  });
}