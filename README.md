# GeneratorLab · offline editie 2

Nederlandstalige interactieve driefasige generator met wetten, formules, voorbeelden, vectorontbindingen, rekenlabs en oefeningen met feedback.

## Starten zonder internet

1. Pak de volledige ZIP uit in één map.
2. Open `index.html` in een recente Chrome, Edge, Firefox of Safari.
3. Gebruik de navigatie voor de theorie, vectoren, rekenlabs en oefeningen.

Bewaar alle bestanden in dezelfde map. De uitbreiding bestaat uit meerdere lokale bestanden; alleen `index.html` kopiëren is niet voldoende. Er zijn geen externe scripts, lettertypen, npm-installatie of server nodig. De bronlinks zijn alleen achtergrondverwijzingen en hebben internet nodig om geopend te worden.

## Inhoud

- Generator: rotor, sinusspanningen, flux en pauzeren/stappen.
- Wikkelingen: U1–U2, V1–V2, W1–W2; schematisch klemmenbord in open, ster- en driehoekverbinding.
- Theorie: vectoren, Faraday, Lenz, Lorentz, flux, AC/RMS, driefasen, Ohm, Pouillet, Kirchhoff, Joule, RLC, vermogens, koppel, energie en aanvullende veldwetten.
- Vectorlabs: projectie van B voor flux, ontbinding van v voor Lorentz, vectorverschillen van drie spanningsfasoren.
- Rekenlabs: generator uit flux/toerental/poolparen; serie-RLC; symmetrisch driefasig vermogen.
- Twaalf oefeningen met één hint, feedback en een uitwerking.

## GitHub Pages

1. Maak een openbare repository `ac-generator` aan.
2. Upload de uitgepakte bestanden direct in de hoofdmap, niet alleen de ZIP.
3. Kies **Settings → Pages → Deploy from a branch → main → /(root) → Save**.
4. Wacht tot GitHub de publicatie heeft afgerond en gebruik de getoonde link.

Verwachte link voor DHRHermans/ac-generator: https://dhrhermans.github.io/ac-generator/
Die link wordt pas actief na het aanmaken, uploaden en publiceren. Deze bestanden zijn nog niet rechtstreeks naar GitHub gestuurd.

## Bestanden

- `index.html`: generator en navigatie.
- `klemmen.js`: klemmenbord en koppelingen.
- `theorie.html`: theorie, vectoren, rekenlabs en oefeningen.
- `theorie.css`: responsieve opmaak.
- `theorie.js`: formulerendering en interactie.
- `wetten.js`: uitbreidbare inhoud en oefeningen.
- `BRONNEN.md`: referenties en modelgrenzen.
- `tests/`: controles van berekeningen en interacties; niet nodig om de app te gebruiken.

## Uitbreiden

Voeg een onderwerp toe aan `GENERATOR_LAWS` in `wetten.js`. Geef titel, categorie, uitleg, formules, eenheden/voorwaarden, voorbeeld en veelgemaakte fout op. Nieuwe onderwerpen verschijnen automatisch in de theoriezoeker. Een oefening voeg je toe aan `GENERATOR_EXERCISES`.

De formulerendering gebruikt native MathML: `U_eff` wordt een subscript, `I^2` een macht en `[[U|I]]` een echte breuk. In de eenvoudige formulesyntaxis is de eerste verticale streep in zo'n breuk het scheidingsteken; gebruik bijvoorbeeld `abs(q)` voor een absolute waarde in de teller.

## Belangrijk modelverschil

De rotoranimatie blijft een tweepolige ideale generator. Zij laat de wikkelingsspanning onafhankelijk van f instellen en veronderstelt daarmee aangepaste bekrachtiging. De rekenlabs tonen wat bij vaste flux gebeurt en kunnen meerdere poolparen berekenen. De klemmenweergave laat de wikkelingsspanning gelijk en berekent de bijbehorende lijnspanning. De rekenlabs en vectorlabs wijzigen de rotorinstellingen niet.
