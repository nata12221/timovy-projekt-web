/**
 * PROJEKTOVÁ DOKUMENTÁCIA
 *
 * Postup pridania:
 * 1. Nahrajte PDF alebo DOCX do priečinka documents/documentation/.
 * 2. Skopírujte vzorový objekt nižšie do poľa window.documentsData.
 * 3. Upravte údaje. category musí byť jedna z kategórií uvedených nižšie.
 *
 * Vzor:
 * {
 *   title: "Analýza požiadaviek",
 *   category: "Analýza",
 *   description: "Východiská, ciele a funkčné požiadavky projektu.",
 *   author: "Natália Žilová",
 *   dateAdded: "05. 10. 2026",
 *   dateUpdated: "05. 10. 2026",
 *   version: "1.0",
 *   file: "documents/documentation/analyza-poziadaviek.pdf"
 * }
 */
window.documentCategories = [
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

window.documentsData = [];
