(function () {
  var e = Utils.esc;
  function avatar(p, lg) {
    var cls = "avatar" + (lg ? " avatar--lg" : "");
    return p.photo
      ? '<img class="' + cls + '" src="' + e(p.photo) + '" alt="Profilová fotografia – ' + e(p.name) + '">'
      : '<div class="' + cls + '" role="img" aria-label="Placeholder fotografie – ' + e(p.name) + '">' + Utils.initials(p.name) + "</div>";
  }
  document.getElementById("supervisors").innerHTML = (window.SUPERVISORS || []).map(function (p) {
    return '<div class="person-chip">' + avatar(p) + "<div><strong>" + e(p.name) + '</strong><div class="muted">' + e(p.role) + "</div></div></div>";
  }).join("");
  document.getElementById("members").innerHTML = (window.TEAM || []).map(function (p) {
    return '<article class="card member">' + avatar(p, true) + "<h3>" + e(p.name) + '</h3><div class="role">' + e(p.role) +
      '</div><p class="muted">' + e(p.description) + "</p></article>";
  }).join("");
})();
