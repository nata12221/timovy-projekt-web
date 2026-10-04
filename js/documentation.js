(function () {
  var e = Utils.esc;
  var docs = window.DOCUMENTS || [];
  var cats = ["Všetky"].concat(window.DOCUMENT_CATEGORIES || []);
  var filter = document.getElementById("category-filter");
  var list = document.getElementById("doc-list");
  var countNode = document.getElementById("doc-count");
  var active = "Všetky";

  function count(c) { return c === "Všetky" ? docs.length : docs.filter(function (d) { return d.category === c; }).length; }

  function renderFilter() {
    filter.innerHTML = cats.map(function (c) {
      return '<option value="' + e(c) + '">' + e(c) + " (" + count(c) + ")</option>";
    }).join("");
    filter.value = active;
  }
  function renderList() {
    var items = docs.filter(function (d) { return active === "Všetky" || d.category === active; });
    countNode.textContent = items.length;
    list.innerHTML = items.length ? items.map(function (d) {
      return '<article class="card doc-card"><div class="doc-top"><span class="badge badge--cat">' + e(d.category) +
        '</span><span class="badge badge--file">' + Utils.ext(d.file).toUpperCase() + " · v" + e(d.version) + "</span></div><h3>" + e(d.title) +
        '</h3><p class="muted" style="margin:0">' + e(d.description) + '</p><dl class="doc-meta"><div><dt>Autor:</dt><dd>' + e(d.author) +
        "</dd></div><div><dt>Pridané:</dt><dd>" + e(d.added) + "</dd></div><div><dt>Aktualizované:</dt><dd>" + e(d.updated) +
        '</dd></div></dl><div class="doc-actions">' + Utils.fileButtons(d.file, d.title) + "</div></article>";
    }).join("") : '<p class="empty">V tejto kategórii zatiaľ nie sú žiadne dokumenty.</p>';
  }
  filter.addEventListener("change", function () {
    active = filter.value;
    renderList();
  });
  renderFilter(); renderList();
})();
