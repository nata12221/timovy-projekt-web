(function () {
  var e = Utils.esc;
  var items = (window.MINUTES || []).slice().sort(function (a, b) { return b.number - a.number; });
  document.getElementById("minutes-list").innerHTML = items.length ? items.map(function (m) {
    return '<article class="card doc-card"><div class="doc-top"><span class="minutes-no">Zápisnica č. ' + e(m.number) +
      '</span><span class="badge badge--file">' + Utils.ext(m.file).toUpperCase() + "</span></div><h3>" + e(m.title) +
      '</h3><p class="muted" style="margin:0">' + e(m.description) + '</p><dl class="doc-meta"><div><dt>Dátum:</dt><dd>' + e(m.date) +
      "</dd></div><div><dt>Autor:</dt><dd>" + e(m.author) + '</dd></div></dl><div class="doc-actions">' + Utils.fileButtons(m.file, m.title) + "</div></article>";
  }).join("") : '<p class="empty">Zatiaľ žiadne zápisnice.</p>';
})();
