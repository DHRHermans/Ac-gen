# Driefasige AC-generator

Nederlandstalige interactieve simulator van een driefasige AC-generator met drie spoelassen op 120°.

## Offline gebruiken

Download `index.html` en open het bestand in Chrome, Edge, Firefox of Safari. Geen internet, server, npm, externe bibliotheken of installatie nodig. Alle code en stijlen zitten in één bestand.

Op een computer: dubbelklik op `index.html`. Als je de ZIP gebruikt, pak die eerst uit.

## Op GitHub zetten

1. Maak een nieuwe openbare repository `ac-generator` aan in je eigen GitHub-account.
2. Kies **Add file → Upload files** en upload de uitgepakte bestanden (niet alleen de ZIP). Zorg dat `index.html` direct in de hoofdmap staat.
3. Klik op **Commit changes**.
4. Ga naar **Settings → Pages**. Kies **Deploy from a branch**, branch **main** en map **/(root)**. Klik **Save**.
5. Open de link die GitHub bij Pages toont zodra de publicatie klaar is.

De verwachte link voor account DHRHermans en repository ac-generator is:
https://dhrhermans.github.io/ac-generator/
Deze link is pas actief nadat je de repository hebt aangemaakt en GitHub Pages hebt ingeschakeld.

## Bediening

- Pauzeren/afspelen, stap +30° en een schuifbalk voor de rotorhoek.
- Frequentie: 10–60 Hz. Effectieve fasespanning: 10–300 V.
- Kies L1, L2 of L3 om de relatieve magnetische flux te bekijken.
- De grafiek toont één periode met de actuele rotorpositie.

## Model

Ideale sinusspanningen: u_k = √2 · U_eff · sin(θ − k · 120°), k = 0, 1, 2.
Relatieve flux: Φ_k / Φ_max = cos(θ − k · 120°).
Faraday: u = −N · dΦ/dt, met de gekozen polariteitsconventie.
Tweepolige rotor: n = 60 · f (omw/min). De animatie is 200× vertraagd.
De spanning is onafhankelijk van de frequentie instelbaar: dit veronderstelt aangepaste bekrachtiging. De flux wordt genormaliseerd; de absolute flux en windingenaantallen worden niet berekend. De spoelen zijn schematisch getekend.

Bij 230 V effectief is de piek √2 · 230 ≈ 325,3 V. Dit is fasespanning. Bij een symmetrische sterschakeling is de spanning tussen twee fasen √3 · 230 ≈ 398,4 V (nominaal 400 V); die lijnspanning wordt hier niet getekend.

