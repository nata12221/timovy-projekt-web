(function () {
  "use strict";

  const supervisorsRoot = document.querySelector("[data-supervisors]");
  const membersRoot = document.querySelector("[data-team-members]");
  const data = window.teamData || { supervisors: [], members: [] };

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function initials(name) {
    return String(name).split(/\s+/).filter(Boolean).slice(0, 2).map(function (part) {
      return part.charAt(0).toUpperCase();
    }).join("");
  }

  if (supervisorsRoot) {
    const supervisors = Array.isArray(data.supervisors) ? data.supervisors : [];
    supervisorsRoot.innerHTML = supervisors.map(function (person, index) {
      return `
        <article class="supervisor-card">
          <div class="supervisor-number" aria-hidden="true">0${index + 1}</div>
          <div>
            <p class="eyebrow">Zadávateľ projektu</p>
            <h3>${escapeHtml(person.name)}</h3>
          </div>
        </article>`;
    }).join("");
  }

  if (membersRoot) {
    const members = Array.isArray(data.members) ? data.members : [];
    membersRoot.innerHTML = members.map(function (person, index) {
      const avatar = person.photo
        ? `<img class="member-photo" src="${escapeHtml(person.photo)}" alt="Profilová fotografia – ${escapeHtml(person.name)}">`
        : `<div class="member-photo member-photo-placeholder avatar-${index % 5}" role="img" aria-label="Zástupný profilový obrázok – ${escapeHtml(person.name)}"><span>${escapeHtml(initials(person.name))}</span></div>`;
      return `
        <article class="member-card">
          ${avatar}
          <div class="member-card-body">
            <span class="member-index">0${index + 1}</span>
            <h3>${escapeHtml(person.name)}</h3>
            <p class="member-role">${escapeHtml(person.role)}</p>
            <p>${escapeHtml(person.description)}</p>
          </div>
        </article>`;
    }).join("");
  }
})();
