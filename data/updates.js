/**
 * POSLEDNÉ AKTUALIZÁCIE
 *
 * Novú aktualizáciu pridajte ako objekt do poľa. Záznamy sa automaticky zoradia
 * podľa hodnoty sortDate (formát RRRR-MM-DD) a na domovskej stránke sa zobrazí
 * najviac päť najnovších položiek.
 * Typ môže byť: status, minutes, document alebo general.
 */
window.updatesData = [
  {
    date: "05. 10. 2026",
    sortDate: "2026-10-05",
    type: "status",
    title: "Aktualizovaný stav projektu",
    description: "Doplnené úlohy a priority pre 3. týždeň.",
    link: "status.html"
  },
  {
    date: "04. 10. 2026",
    sortDate: "2026-10-04",
    type: "general",
    title: "Pripravená štruktúra projektu",
    description: "Vytvorená základná štruktúra stránok a dátových súborov.",
    link: "project.html"
  },
  {
    date: "02. 10. 2026",
    sortDate: "2026-10-02",
    type: "status",
    title: "Rozdelené prvé tímové úlohy",
    description: "Tím si rozdelil zodpovednosti pre úvodnú analytickú fázu.",
    link: "status.html"
  },
  {
    date: "28. 09. 2026",
    sortDate: "2026-09-28",
    type: "general",
    title: "Založený projektový repozitár",
    description: "Spustená spoločná práca a verzovanie projektových výstupov.",
    link: "documentation.html"
  }
];
