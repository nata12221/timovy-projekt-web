(function () {
  var e = Utils.esc;
  var weeks = (window.PROJECT_STATUS || []).slice().sort(function (a, b) { return b.week - a.week; });
  var el = document.getElementById("timeline");

  function col(title, cls, tasks) {
    tasks = tasks || [];
    return '<div class="task-col"><h3><span class="badge badge--' + cls + '">' + title + "</span><span class=\"muted\">" + tasks.length + "</span></h3>" +
      (tasks.length
        ? '<ul class="task-list">' + tasks.map(function (t) {
            return '<li class="task"><strong>' + e(t.title) + "</strong><small>Zodpovedá: " + e(t.owner) + "</small>" +
              (t.deadline ? "<small>Deadline: " + e(t.deadline) + "</small>" : "") + "</li>";
          }).join("") + "</ul>"
        : '<p class="empty">Žiadne úlohy</p>') + "</div>";
  }

  el.innerHTML = weeks.length ? weeks.map(function (w) {
    return '<li><article class="card"><div class="week-head"><h2>' + e(w.week) + '. týždeň</h2><span class="muted">' + e(w.date) +
      "</span></div><p>" + e(w.description) + '</p><div class="task-cols">' +
      col("Hotové", "done", w.completed) + col("Rozpracované", "progress", w.inProgress) + col("Naplánované", "planned", w.planned) +
      "</div></article></li>";
  }).join("") : '<li class="empty">Zatiaľ žiadne záznamy.</li>';
})();
