// Q5 College Timetable Viewer
function loadTimetable(day) {
  fetch(`/timetable?day=${day}`)
    .then(res => res.json())
    .then(data => {
      if (data.length === 0) {
        document.getElementById("table").innerHTML = "No classes today.";
        return;
      }
      let html = data.map(c => `
        <div>
          <strong>${c.subject}</strong> - ${c.faculty} - ${c.time}
        </div>`).join('');
      document.getElementById("table").innerHTML = html;
    });
}