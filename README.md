# Tímový projekt – webová prezentácia

Statický responzívny web pre projekt **Platforma využívajúca strojové učenie a automatizovaný zber trhových dát na predikciu cien a optimalizáciu cenotvorby produktov**.

Web používa iba HTML, CSS a JavaScript. Nevyžaduje backend, databázu, build ani inštaláciu balíkov a je pripravený na publikovanie cez GitHub Pages.

## Lokálne spustenie

Najjednoduchší spôsob je otvoriť súbor `index.html` priamo v prehliadači. Dátové súbory sú JavaScript objekty, preto fungujú aj bez lokálneho servera.

Pri úpravách môžete použiť aj rozšírenie **Live Server** vo VS Code:

1. otvorte celý priečinok projektu vo VS Code,
2. kliknite pravým tlačidlom na `index.html`,
3. vyberte **Open with Live Server**.

## Publikovanie cez GitHub Pages

1. Nahrajte celý obsah priečinka do GitHub repozitára.
2. V repozitári otvorte **Settings → Pages**.
3. V časti **Build and deployment** vyberte **Deploy from a branch**.
4. Vyberte vetvu `main` a priečinok `/ (root)`.
5. Uložte nastavenie tlačidlom **Save**.

Po publikovaní bude web dostupný napríklad na `https://username.github.io/repository-name/`. Všetky cesty na webe sú relatívne, takže fungujú aj na GitHub Pages project site.

## Kde sa upravuje obsah

Bežný obsah sa upravuje v priečinku `data/` bez zásahu do HTML alebo CSS:

| Súbor | Obsah |
| --- | --- |
| `data/project-status.js` | týždenný stav a úlohy |
| `data/team.js` | zadávatelia a členovia tímu |
| `data/minutes.js` | zoznam zápisníc |
| `data/documents.js` | zoznam dokumentov a kategórie |
| `data/updates.js` | aktualizácie na domovskej stránke |

Každý dátový súbor obsahuje na začiatku krátky komentovaný návod a vzor položky.

## Pridanie nového týždňa

1. Otvorte `data/project-status.js`.
2. Skopírujte jeden existujúci objekt týždňa.
3. Upravte `week`, `date`, `description` a zoznamy `completed`, `inProgress`, `planned`.
4. Pri úlohe vyplňte `title`, `owner` a voliteľne `deadline`.
5. Uložte súbor a nahrajte zmenu na GitHub.

Poradie objektov nie je dôležité. Web automaticky zobrazí najvyššie číslo týždňa ako najnovší záznam.

## Pridanie zápisnice

1. Nahrajte PDF alebo DOCX do `documents/minutes/`.
2. Otvorte `data/minutes.js`.
3. Skopírujte vzorový objekt z komentára do poľa `window.minutesData`.
4. Upravte číslo, dátum, názov, autora, popis a relatívnu cestu k súboru.
5. Pre viac položiek oddeľte objekty čiarkou.

Pri PDF sa zobrazia tlačidlá **Zobraziť** aj **Stiahnuť**. DOCX ponúkne stiahnutie.

## Pridanie dokumentu

1. Nahrajte PDF alebo DOCX do `documents/documentation/`.
2. Otvorte `data/documents.js`.
3. Skopírujte vzorový objekt z komentára do poľa `window.documentsData`.
4. Doplňte názov, kategóriu, popis, autora, dátumy, verziu a cestu k súboru.

Kategória musí presne zodpovedať jednej hodnote v poli `window.documentCategories`, aby fungovalo filtrovanie.

## Úprava tímu

Otvorte `data/team.js` a upravte položky v častiach `supervisors` alebo `members`. Pri členoch môžete zmeniť meno, rolu, popis a fotografiu.

Fotografie nahrajte do `assets/images/` a do poľa `photo` zadajte napríklad:

```js
photo: "assets/images/natalia-zilova.jpg"
```

Ak `photo` zostane prázdne, web automaticky použije farebný avatar s iniciálami.

## Štruktúra projektu

```text
/
├── index.html
├── project.html
├── status.html
├── team.html
├── minutes.html
├── documentation.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   ├── home.js
│   ├── status.js
│   ├── team.js
│   ├── minutes.js
│   └── documentation.js
├── data/
│   ├── project-status.js
│   ├── team.js
│   ├── minutes.js
│   ├── documents.js
│   └── updates.js
├── documents/
│   ├── minutes/
│   └── documentation/
└── assets/
    ├── images/
    └── icons/
```

## Poznámky

- Názvy súborov odporúčame písať bez diakritiky a medzier, napr. `zapisnica-01.pdf`.
- Po premenovaní alebo presunutí dokumentu vždy upravte aj jeho cestu v dátovom súbore.
- Nepoužívajte cesty začínajúce lomkou (`/assets/...`), pretože na GitHub Pages project site by odkazovali na nesprávne miesto.
