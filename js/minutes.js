(function () {
  "use strict";

  const root = document.querySelector("[data-minutes-list]");
  const countRoot = document.querySelector("[data-minutes-count]");
  if (!root) return;

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  const items = Array.isArray(window.minutesData) ? window.minutesData : [];
  const sortedItems = [...items].sort(function (a, b) { return Number(b.number) - Number(a.number); });
  if (countRoot) countRoot.textContent = String(sortedItems.length);

  if (!sortedItems.length) {
    root.innerHTML = `
      <div class="empty-state document-empty">
        <div class="empty-icon" aria-hidden="true">≡</div>
        <h2>Zatiaľ nebola pridaná žiadna zápisnica</h2>
        <p>Po nahratí súboru do <code>documents/minutes/</code> pridajte jeho údaje do <code>data/minutes.js</code>.</p>
      </div>`;
    return;
  }

  root.innerHTML = sortedItems.map(function (item) {
    const file = escapeHtml(item.file);
    const isPdf = String(item.file || "").toLowerCase().endsWith(".pdf");
    const viewButton = isPdf
      ? `<a class="button button-secondary button-small" href="${file}" target="_blank" rel="noopener">Zobraziť <span class="sr-only">${escapeHtml(item.title)}</span></a>`
      : "";

    return `
      <article class="document-row">
        <div class="document-number"><span>Zápisnica</span><strong>#${String(item.number).padStart(2, "0")}</strong></div>
        <div class="document-main">
          <div class="document-heading">
            <div>
              <p class="document-date">${escapeHtml(item.date)}</p>
              <h2>${escapeHtml(item.title)}</h2>
            </div>
            <span class="file-type">${isPdf ? "PDF" : "DOCX"}</span>
          </div>
          <p>${escapeHtml(item.description)}</p>
          <p class="document-author">Autor: <strong>${escapeHtml(item.author)}</strong></p>
        </div>
        <div class="document-actions">
          ${viewButton}
          <a class="button button-primary button-small" href="${file}" download>Stiahnuť <span class="sr-only">${escapeHtml(item.title)}</span></a>
        </div>
      </article>`;
  }).join("");
})();
