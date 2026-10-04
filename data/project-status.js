/*
 * STAV PROJEKTU – týždenné záznamy
 * ---------------------------------
 * Ako pridať nový týždeň:
 *   1. Skopíruj celý objekt { ... } jedného týždňa.
 *   2. Vlož ho kamkoľvek do poľa (poradie nie je dôležité – web zoradí podľa "week").
 *   3. Uprav hodnoty. "deadline" je nepovinný.
 *   4. Nezabudni na čiarku medzi objektmi.
 * Najnovší týždeň (najvyššie číslo) sa automaticky zobrazí aj na domovskej stránke.
 */
window.PROJECT_STATUS = [
  {
    week: 1,
    date: "21. 9. – 27. 9. 2026",
    description: "Zoznámenie sa so zadaním, vytvorenie tímu a nastavenie komunikačných kanálov.",
    completed: [
      { title: "Úvodné stretnutie so zadávateľmi", owner: "Celý tím" },
      { title: "Založenie GitHub repozitára", owner: "Filip Štrba" }
    ],
    inProgress: [],
    planned: []
  },
  {
    week: 2,
    date: "28. 9. – 4. 10. 2026",
    description: "Analýza zadania a prieskum existujúcich riešení na predikciu cien.",
    completed: [
      { title: "Analýza zadania", owner: "Natália Žilová" },
      { title: "Prieskum existujúcich riešení", owner: "Nemanja Polić" },
      { title: "Vytvorenie webu tímu", owner: "Natália Žilová" }
    ],
    inProgress: [
      { title: "Zoznam verejných zdrojov dát", owner: "Nikita Ziborov", deadline: "8. 10. 2026" }
    ],
    planned: []
  },
  {
    week: 3,
    date: "5. 10. – 11. 10. 2026",
    description: "Analýza dostupných zdrojov dát a návrh architektúry systému.",
    completed: [
      { title: "Zoznam verejných zdrojov dát", owner: "Nikita Ziborov" },
      { title: "Prehľad ML metód pre časové rady", owner: "Martin Ljavo" }
    ],
    inProgress: [
      { title: "Návrh architektúry systému", owner: "Martin Ljavo", deadline: "11. 10. 2026" },
      { title: "Prototyp web scrapera", owner: "Filip Štrba", deadline: "14. 10. 2026" }
    ],
    planned: [
      { title: "Návrh databázovej štruktúry", owner: "Nikita Ziborov", deadline: "18. 10. 2026" },
      { title: "Návrh UI dashboardu", owner: "Nemanja Polić", deadline: "20. 10. 2026" }
    ]
  }
];
