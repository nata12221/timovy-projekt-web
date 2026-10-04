(function () {
  var e = Utils.esc;
  var weeks = (window.PROJECT_STATUS || []).slice().sort(function (a, b) { return b.week - a.week; });
  var box = document.getElementById("current-status");
  if (box) {
    var w = weeks[0];
    box.innerHTML = w
      ? '<div class="card"><span class="week-pill">' + e(w.week) + ". týždeň</span>" +
        '<p class="muted" style="margin:12px 0 6px">' + e(w.date) + "</p>" +
        "<p>" + e(w.description) + '</p><a class="btn btn--ghost btn--sm" href="status.html">Celý priebeh</a></div>' +
        '<div class="stat-row"><div class="stat stat--done"><div class="stat-value">' + (w.completed || []).length +
        '</div><p class="muted" style="margin:6px 0 0">Dokončené úlohy</p></div>' +
        '<div class="stat stat--progress"><div class="stat-value">' + (w.inProgress || []).length +
        '</div><p class="muted" style="margin:6px 0 0">Rozpracované úlohy</p></div></div>'
      : '<p class="empty">Zatiaľ žiadne záznamy.</p>';
  }
  var list = document.getElementById("updates");
  if (list) {
    var items = (window.UPDATES || []).slice(0, 5);
    list.innerHTML = items.length
      ? items.map(function (u) {
          return '<li class="update" data-type="' + e(u.type) + '"><span class="update-dot" aria-hidden="true"></span><div><div>' +
            e(u.text) + '</div><div class="update-date"><time>' + e(u.date) + "</time></div></div></li>";
        }).join("")
      : '<li class="empty">Žiadne aktualizácie.</li>';
  }
})();
