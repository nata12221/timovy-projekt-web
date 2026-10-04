(function () {
  "use strict";

  const root = document.querySelector("[data-status-timeline]");
  if (!root) return;

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  const groups = [
    { key: "completed", title: "Hotové", className: "complete", empty: "V tomto týždni zatiaľ bez hotových úloh." },
    { key: "inProgress", title: "Rozpracované", className: "progress", empty: "Žiadne rozpracované úlohy." },
    { key: "planned", title: "Naplánované", className: "planned", empty: "Žiadne naplánované úlohy." }
  ];

  function renderTask(task, className) {
    const deadline = task.deadline
      ? `<span class="task-deadline"><span aria-hidden="true">◷</span> Deadline: ${escapeHtml(task.deadline)}</span>`
      : "";
    return `
      <li class="task-item">
        <div class="task-state task-state-${className}" aria-hidden="true"></div>
        <div>
          <h4>${escapeHtml(task.title)}</h4>
          <div class="task-meta">
            <span><span aria-hidden="true">◎</span> ${escapeHtml(task.owner || "Nepriradené")}</span>
            ${deadline}
          </div>
        </div>
      </li>`;
  }

  const weeks = Array.isArray(window.projectStatusData) ? window.projectStatusData : [];
  const sortedWeeks = [...weeks].sort(function (a, b) { return Number(b.week) - Number(a.week); });

  if (!sortedWeeks.length) {
    root.innerHTML = '<div class="empty-state"><h2>Zatiaľ bez týždenných záznamov</h2><p>Prvý týždeň pridajte do súboru <code>data/project-status.js</code>.</p></div>';
    return;
  }

  root.innerHTML = sortedWeeks.map(function (week, index) {
    const isLatest = index === 0;
    const totalTasks = groups.reduce(function (total, group) {
      return total + (Array.isArray(week[group.key]) ? week[group.key].length : 0);
    }, 0);

    const taskGroups = groups.map(function (group) {
      const tasks = Array.isArray(week[group.key]) ? week[group.key] : [];
      return `
        <section class="task-group" aria-labelledby="week-${escapeHtml(week.week)}-${group.className}">
          <div class="task-group-heading">
            <h3 id="week-${escapeHtml(week.week)}-${group.className}">
              <span class="status-badge badge-${group.className}">${group.title}</span>
            </h3>
            <span class="task-count">${tasks.length}</span>
          </div>
          ${tasks.length
            ? `<ul class="task-list">${tasks.map(function (task) { return renderTask(task, group.className); }).join("")}</ul>`
            : `<p class="task-empty">${group.empty}</p>`}
        </section>`;
    }).join("");

    return `
      <article class="timeline-entry${isLatest ? " is-latest" : ""}">
        <div class="timeline-node" aria-hidden="true"><span>${escapeHtml(week.week)}</span></div>
        <div class="week-card">
          <header class="week-card-header">
            <div>
              <div class="week-title-line">
                <p class="eyebrow">Týždeň ${escapeHtml(week.week)}</p>
                ${isLatest ? '<span class="latest-label">Najnovšie</span>' : ""}
              </div>
              <h2>${escapeHtml(week.description)}</h2>
            </div>
            <div class="week-meta">
              <time>${escapeHtml(week.date)}</time>
              <span>${totalTasks} ${totalTasks === 1 ? "úloha" : totalTasks < 5 ? "úlohy" : "úloh"}</span>
            </div>
          </header>
          <div class="task-columns">${taskGroups}</div>
        </div>
      </article>`;
  }).join("");
})();
