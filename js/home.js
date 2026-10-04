(function () {
  "use strict";

  const statusRoot = document.querySelector("[data-current-status]");
  const updatesRoot = document.querySelector("[data-latest-updates]");

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  if (statusRoot) {
    const weeks = Array.isArray(window.projectStatusData) ? window.projectStatusData : [];
    const latest = [...weeks].sort(function (a, b) { return Number(b.week) - Number(a.week); })[0];

    if (!latest) {
      statusRoot.innerHTML = '<div class="empty-state"><h3>Stav zatiaľ nebol pridaný</h3><p>Prvý týždeň pridajte do súboru <code>data/project-status.js</code>.</p></div>';
    } else {
      const completedCount = Array.isArray(latest.completed) ? latest.completed.length : 0;
      const inProgressCount = Array.isArray(latest.inProgress) ? latest.inProgress.length : 0;
      statusRoot.innerHTML = `
        <div class="status-summary-main">
          <div class="status-kicker"><span class="pulse-dot" aria-hidden="true"></span> Aktuálny prehľad</div>
          <p class="week-label">Týždeň ${escapeHtml(latest.week)}</p>
          <p class="status-date">${escapeHtml(latest.date)}</p>
          <p class="status-description">${escapeHtml(latest.description)}</p>
          <a class="text-link" href="status.html">Zobraziť celý priebeh</a>
        </div>
        <div class="status-metrics" aria-label="Súhrn úloh">
          <div class="metric-card metric-complete">
            <span class="metric-number">${completedCount}</span>
            <span class="metric-label">hotové úlohy</span>
          </div>
          <div class="metric-card metric-progress">
            <span class="metric-number">${inProgressCount}</span>
            <span class="metric-label">rozpracované úlohy</span>
          </div>
        </div>`;
    }
  }

  if (updatesRoot) {
    const updates = Array.isArray(window.updatesData) ? window.updatesData : [];
    const latestUpdates = [...updates]
      .sort(function (a, b) { return String(b.sortDate).localeCompare(String(a.sortDate)); })
      .slice(0, 5);

    if (!latestUpdates.length) {
      updatesRoot.innerHTML = '<div class="empty-state"><h3>Zatiaľ bez aktualizácií</h3><p>Novinky pridajte do súboru <code>data/updates.js</code>.</p></div>';
    } else {
      updatesRoot.innerHTML = latestUpdates.map(function (item) {
        const labelByType = {
          status: "Stav projektu",
          minutes: "Zápisnica",
          document: "Dokument",
          general: "Projekt"
        };
        return `
          <article class="update-item">
            <div class="update-marker update-${escapeHtml(item.type || "general")}" aria-hidden="true"></div>
            <div class="update-content">
              <div class="update-meta">
                <span>${escapeHtml(labelByType[item.type] || "Aktualizácia")}</span>
                <time>${escapeHtml(item.date)}</time>
              </div>
              <h3><a href="${escapeHtml(item.link || "#")}">${escapeHtml(item.title)}</a></h3>
              <p>${escapeHtml(item.description)}</p>
            </div>
          </article>`;
      }).join("");
    }
  }
})();
