/*
 * ZÁPISNICE
 * ---------
 * Ako pridať zápisnicu:
 *   1. Nahraj PDF alebo DOCX do priečinka documents/minutes/
 *   2. Pridaj nový objekt do poľa nižšie (cesta "file" musí sedieť s názvom súboru).
 *   3. PDF sa dá zobraziť aj stiahnuť, DOCX iba stiahnuť.
 * Zápisnice sa zoradia automaticky od najnovšej (podľa "number").
 */
window.MINUTES = [
  {
    number: 1,
    title: "Prvé stretnutie tímu – návrh technického riešenia",
    date: "8. 10. 2026",
    author: "Natália Žilová",
    description: "Návrh zberu a kategorizácie dát pomocou scrapera a LLM, technické prostredie projektu, zdroje dát a požiadavky na webový výstup.",
    file: "documents/minutes/zapisnica-01-2026-10-08-natalia.pdf"
  },
  {
    number: 2,
    title: "Výber e-shopu a návrh dátového výstupu",
    date: "17. 10. 2026",
    author: "Martin Ljavo",
    description: "Výber e-shopu kosik.sk na prvé scrapovanie, diskusia o kategóriách mäsových výrobkov a návrh štruktúrovaného JSON výstupu z LLM.",
    file: "documents/minutes/zapisnica-02-2026-10-17.pdf"
  },
  {
    number: 3,
    title: "Prezentácia aktuálneho stavu projektu",
    date: "22. 10. 2026",
    author: "Natália Žilová",
    description: "Prezentácia rozpracovaného riešenia zadávateľom, zhodnotenie aktuálneho stavu a dohoda pokračovať v dlhodobých úlohách projektu.",
    file: "documents/minutes/zapisnica-03-2026-10-22.pdf"
  },
  {
    number: 4,
    title: "Crawler, scraper a plán ďalšieho zberu dát",
    date: "30. 10. 2026",
    author: "Nemanja Polić",
    description: "Stav scrapera pre kosik.sk, plán zberu dát, návrh crawlera a dávkového spracovania, databázové možnosti a rozdelenie úloh na ďalšie obdobie.",
    file: "documents/minutes/zapisnica-04-2026-10-30.pdf"
  }
];
