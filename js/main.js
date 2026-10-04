/* Spoločná logika: navigácia, pätička, pomocné funkcie. */
(function () {
  var PAGES = [
    { href: "index.html", label: "Domov", id: "home" },
    { href: "project.html", label: "Projekt", id: "project" },
    { href: "status.html", label: "Stav projektu", id: "status" },
    { href: "team.html", label: "Tím", id: "team" },
    { href: "minutes.html", label: "Zápisnice", id: "minutes" },
    { href: "documentation.html", label: "Dokumentácia", id: "documentation" }
  ];
  var current = document.body.getAttribute("data-page");

  var header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML =
      '<nav class="container nav" aria-label="Hlavná navigácia">' +
      '<a class="brand" href="index.html"><span class="brand-mark" aria-hidden="true">' +
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M3 17l6-6 4 4 8-8"/></svg>' +
      "</span><span>PricePredict</span></a>" +
      '<button class="nav-toggle" aria-expanded="false" aria-controls="nav-list" aria-label="Otvoriť menu"><span></span></button>' +
      '<ul class="nav-list" id="nav-list">' +
      PAGES.map(function (p) {
        return '<li><a href="' + p.href + '"' + (p.id === current ? ' aria-current="page"' : "") + ">" + p.label + "</a></li>";
      }).join("") +
      "</ul></nav>";

    var toggle = header.querySelector(".nav-toggle");
    var list = header.querySelector(".nav-list");
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.setAttribute("aria-label", open ? "Otvoriť menu" : "Zavrieť menu");
      list.classList.toggle("is-open", !open);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && list.classList.contains("is-open")) { toggle.click(); toggle.focus(); }
    });
  }

  var footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML =
      '<div class="container footer-inner"><div><strong>Tímový projekt</strong><br>' +
      "Platforma na predikciu cien a optimalizáciu cenotvorby</div>" +
      "<div>© " + new Date().getFullYear() + " Tím projektu · Zadávatelia: Samuel Gibala, Matúš Vaňo</div></div>";
  }
})();

/* Pomocné funkcie dostupné pre ostatné skripty */
window.Utils = {
  esc: function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  },
  ext: function (path) {
    var m = String(path || "").toLowerCase().match(/\.([a-z0-9]+)$/);
    return m ? m[1] : "";
  },
  initials: function (name) {
    return String(name).split(" ").map(function (p) { return p[0]; }).join("").slice(0, 2).toUpperCase();
  },
  /* Tlačidlá Zobraziť / Stiahnuť. PDF sa dá zobraziť, DOCX len stiahnuť. */
  fileButtons: function (file, title) {
    var e = Utils.esc, isPdf = Utils.ext(file) === "pdf";
    var view = isPdf
      ? '<a class="btn btn--primary btn--sm" href="' + e(file) + '" target="_blank" rel="noopener">Zobraziť<span class="sr-only"> – ' + e(title) + "</span></a>"
      : '<span class="btn btn--primary btn--sm" aria-disabled="true" title="DOCX sa nedá zobraziť v prehliadači">Zobraziť</span>';
    var dl = '<a class="btn btn--ghost btn--sm" href="' + e(file) + '" download>Stiahnuť ' + Utils.ext(file).toUpperCase() + "</a>";
    return view + dl;
  }
};
