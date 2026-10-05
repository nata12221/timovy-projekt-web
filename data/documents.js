/*
 * DOKUMENTÁCIA
 * ------------
 * Ako pridať dokument:
 *   1. Nahraj PDF alebo DOCX do priečinka documents/documentation/
 *   2. Pridaj nový objekt do poľa DOCUMENTS.
 *   3. "category" musí byť jedna z hodnôt v DOCUMENT_CATEGORIES (presne rovnaký text).
 */
window.DOCUMENT_CATEGORIES = [
  "Analýza",
  "Návrh riešenia",
  "Architektúra",
  "Dáta",
  "Machine Learning",
  "Testovanie",
  "Technická dokumentácia",
  "Používateľská dokumentácia",
  "Ostatné"
];

window.DOCUMENTS = [];
