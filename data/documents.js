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

window.DOCUMENTS = [
  {
    title: "Analýza zadania",
    category: "Analýza",
    description: "Rozbor zadania, cieľov projektu a požiadaviek zadávateľov.",
    author: "Natália Žilová",
    added: "01. 10. 2026",
    updated: "03. 10. 2026",
    version: "1.1",
    file: "documents/documentation/analyza-zadania.pdf"
  },
  {
    title: "Prehľad zdrojov trhových dát",
    category: "Dáta",
    description: "Zoznam verejne dostupných zdrojov cien produktov a surovín.",
    author: "Nikita Ziborov",
    added: "07. 10. 2026",
    updated: "07. 10. 2026",
    version: "1.0",
    file: "documents/documentation/zdroje-dat.docx"
  }
];
