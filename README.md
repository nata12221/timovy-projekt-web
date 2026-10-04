# PricePredict – web tímového projektu

Statický responzívny web projektu **Platforma využívajúca strojové učenie a automatizovaný zber trhových dát na predikciu cien a optimalizáciu cenotvorby produktov**.

Web používa iba HTML, CSS a JavaScript. Nevyžaduje backend, databázu, build ani inštaláciu balíkov a je pripravený pre GitHub Pages.

## Lokálne otvorenie

Otvorte súbor `index.html` priamo v prehliadači. Keďže obsah je uložený v JavaScript dátových súboroch, web funguje aj bez lokálneho servera.

Vo VS Code môžete použiť aj rozšírenie **Live Server** a pri súbore `index.html` vybrať **Open with Live Server**.

## Publikovanie cez GitHub Pages

1. Nahrajte celý obsah do koreňa GitHub repozitára.
2. Otvorte **Settings → Pages**.
3. Vyberte **Deploy from a branch**.
4. Nastavte vetvu `main` a priečinok `/ (root)`.
5. Uložte nastavenie.

Súbor `.nojekyll` zabezpečí priame publikovanie statických súborov. Všetky cesty sú relatívne a fungujú aj na adrese `https://username.github.io/repository-name/`.

## Kde sa upravuje obsah

| Súbor | Obsah |
| --- | --- |
| `data/project-status.js` | týždenný stav a úlohy |
| `data/team.js` | zadávatelia a členovia tímu |
| `data/minutes.js` | zoznam zápisníc |
| `data/documents.js` | dokumenty a kategórie filtra |
| `data/updates.js` | aktualizácie na domovskej stránke |

Každý dátový súbor obsahuje komentovaný návod na pridanie novej položky.

## Nový týždeň

V `data/project-status.js` skopírujte existujúci objekt týždňa, zvýšte hodnotu `week` a upravte `date`, `description`, `completed`, `inProgress` a `planned`. Web zoradí týždne automaticky.

## Nová zápisnica

1. Nahrajte PDF alebo DOCX do `documents/minutes/`.
2. Pridajte objekt do `data/minutes.js`.
3. V `file` použite relatívnu cestu, napr. `documents/minutes/zapisnica-03.pdf`.

PDF možno zobraziť aj stiahnuť. DOCX je dostupný na stiahnutie.

## Nový dokument

1. Nahrajte PDF alebo DOCX do `documents/documentation/`.
2. Pridajte objekt do `data/documents.js`.
3. Hodnota `category` musí presne zodpovedať jednej položke v `DOCUMENT_CATEGORIES`.

Rozbaľovací filter na stránke Dokumentácia sa naplní automaticky a pri každej kategórii zobrazí počet dokumentov.

## Úprava tímu

V `data/team.js` môžete zmeniť meno, rolu, popis alebo fotografiu. Fotografiu nahrajte do `assets/images/` a použite napríklad:

```js
photo: "assets/images/natalia-zilova.jpg"
```

Ak zostane `photo` prázdne, web zobrazí iniciály člena.

## Štruktúra

```text
/
├── index.html
├── project.html
├── status.html
├── team.html
├── minutes.html
├── documentation.html
├── css/styles.css
├── js/
├── data/
├── documents/
│   ├── minutes/
│   └── documentation/
└── assets/
    ├── images/
    └── icons/
```

Názvy nahrávaných súborov odporúčame písať bez diakritiky a medzier.
