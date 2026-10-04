(function () {
  "use strict";

  const filter = document.querySelector("[data-category-filter]");
  const root = document.querySelector("[data-documents-list]");
  const countRoot = document.querySelector("[data-documents-count]");
  if (!root) return;

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  const documents = Array.isArray(window.documentsData) ? window.documentsData : [];
  const categories = Array.isArray(window.documentCategories) ? window.documentCategories : [];

  if (filter) {
    filter.innerHTML = '<option value="all">Všetky kategórie</option>' + categories.map(function (category) {
      return `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`;
    }).join("");
  }

  function render(selectedCategory) {
    const selected = selectedCategory || "all";
    const filtered = selected === "all"
      ? documents
      : documents.filter(function (documentItem) { return documentItem.category === selected; });

    if (countRoot) countRoot.textContent = String(filtered.length);

    if (!filtered.length) {
      const title = documents.length ? "V tejto kategórii nie sú dokumenty" : "Zatiaľ nebol pridaný žiadny dokument";
      const text = documents.length
        ? "Vyberte inú kategóriu alebo zobrazte všetky dokumenty."
        : "Po nahratí súboru do priečinka dokumentácie pridajte jeho údaje do dátového súboru.";
      root.innerHTML = `
        <div class="empty-state document-empty">
          <div class="empty-icon" aria-hidden="true">□</div>
          <h2>${title}</h2>
          <p>${text}</p>
        </div>`;
      return;
    }

    root.innerHTML = filtered.map(function (item) {
      const file = escapeHtml(item.file);
      const isPdf = String(item.file || "").toLowerCase().endsWith(".pdf");
      const viewButton = isPdf
        ? `<a class="button button-secondary button-small" href="${file}" target="_blank" rel="noopener">Zobraziť <span class="sr-only">${escapeHtml(item.title)}</span></a>`
        : "";
      return `
        <article class="documentation-card">
          <div class="documentation-card-top">
            <span class="category-tag">${escapeHtml(item.category)}</span>
            <span class="file-type">${isPdf ? "PDF" : "DOCX"}</span>
          </div>
          <h2>${escapeHtml(item.title)}</h2>
          <p>${escapeHtml(item.description)}</p>
          <dl class="document-details">
            <div><dt>Autor</dt><dd>${escapeHtml(item.author)}</dd></div>
            <div><dt>Verzia</dt><dd>${escapeHtml(item.version)}</dd></div>
            <div><dt>Pridané</dt><dd>${escapeHtml(item.dateAdded)}</dd></div>
            <div><dt>Aktualizované</dt><dd>${escapeHtml(item.dateUpdated || item.dateAdded)}</dd></div>
          </dl>
          <div class="documentation-actions">
            ${viewButton}
            <a class="button button-primary button-small" href="${file}" download>Stiahnuť <span class="sr-only">${escapeHtml(item.title)}</span></a>
          </div>
        </article>`;
    }).join("");
  }

  render("all");
  if (filter) {
    filter.addEventListener("change", function () { render(filter.value); });
  }
})();
