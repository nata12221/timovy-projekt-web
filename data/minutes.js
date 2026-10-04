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
    date: "24. 09. 2026",
    title: "Úvodné stretnutie tímu",
    author: "Natália Žilová",
    description: "Úvodné stretnutie a rozdelenie prvých úloh.",
    file: "documents/minutes/zapisnica-01.pdf"
  },
  {
    number: 2,
    date: "02. 10. 2026",
    title: "Stretnutie so zadávateľmi",
    author: "Natália Žilová",
    description: "Upresnenie požiadaviek a dostupných interných dát výrobcu.",
    file: "documents/minutes/zapisnica-02.docx"
  }
];
