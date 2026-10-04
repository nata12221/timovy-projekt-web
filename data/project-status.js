/**
 * TÝŽDENNÝ STAV PROJEKTU
 *
 * Ako pridať nový týždeň:
 * 1. Skopírujte celý objekt medzi zloženými zátvorkami.
 * 2. Zmeňte week, date, description a zoznamy úloh.
 * 3. Nový objekt môžete vložiť na začiatok alebo koniec poľa – web si týždne zoradí.
 * 4. Nezabudnite medzi objektmi ponechať čiarku.
 *
 * Deadline je voliteľný. Ak ho úloha nemá, riadok deadline jednoducho vynechajte.
 */
window.projectStatusData = [
  {
    week: 3,
    date: "5. 10. – 11. 10. 2026",
    description: "Analýza dostupných zdrojov dát a návrh architektúry systému.",
    completed: [
      {
        title: "Analýza zadania",
        owner: "Natália Žilová"
      },
      {
        title: "Prieskum dostupných trhových zdrojov",
        owner: "Nikita Ziborov"
      }
    ],
    inProgress: [
      {
        title: "Návrh architektúry systému",
        owner: "Martin Ljavo",
        deadline: "11. 10. 2026"
      },
      {
        title: "Porovnanie metód zberu dát",
        owner: "Nemanja Polić",
        deadline: "11. 10. 2026"
      }
    ],
    planned: [
      {
        title: "Návrh dátovej štruktúry",
        owner: "Nikita Ziborov",
        deadline: "18. 10. 2026"
      },
      {
        title: "Výber metrík pre predikčné modely",
        owner: "Filip Štrba",
        deadline: "18. 10. 2026"
      }
    ]
  },
  {
    week: 2,
    date: "28. 9. – 4. 10. 2026",
    description: "Spresnenie cieľov projektu, rozdelenie kompetencií a príprava pracovného prostredia.",
    completed: [
      {
        title: "Rozdelenie rolí v tíme",
        owner: "Natália Žilová"
      },
      {
        title: "Založenie projektového repozitára",
        owner: "Martin Ljavo"
      }
    ],
    inProgress: [
      {
        title: "Rešerš existujúcich riešení",
        owner: "Filip Štrba",
        deadline: "9. 10. 2026"
      }
    ],
    planned: [
      {
        title: "Zmapovanie dátových potrieb",
        owner: "Nemanja Polić",
        deadline: "11. 10. 2026"
      }
    ]
  },
  {
    week: 1,
    date: "21. 9. – 27. 9. 2026",
    description: "Úvodné stretnutie tímu, predstavenie zadania a dohoda na spôsobe spolupráce.",
    completed: [
      {
        title: "Úvodné stretnutie so zadávateľmi",
        owner: "Natália Žilová"
      },
      {
        title: "Oboznámenie sa so zadaním",
        owner: "Celý tím"
      }
    ],
    inProgress: [],
    planned: [
      {
        title: "Spresnenie rozsahu riešenia",
        owner: "Celý tím",
        deadline: "4. 10. 2026"
      }
    ]
  }
];
