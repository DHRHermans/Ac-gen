# Bronnen en modelgrenzen

Eigen Nederlandstalige uitleg en eigen rekenvoorbeelden. De onderstaande primaire onderwijsbronnen dienen als controle en achtergrond; afbeeldingen en tekstpagina's zijn niet uit die boeken overgenomen.

## Elektromagnetisme

- [Faraday — OpenStax](https://openstax.org/books/university-physics-volume-2/pages/13-1-faradays-law)
- [Lenz — OpenStax](https://openstax.org/books/university-physics-volume-2/pages/13-2-lenzs-law)
- [Magnetische kracht op een geleider — OpenStax](https://openstax.org/books/university-physics-volume-2/pages/11-4-magnetic-force-on-a-current-carrying-conductor)
- [Koppel op een stroomlus — OpenStax](https://openstax.org/books/university-physics-volume-2/pages/11-5-force-and-torque-on-a-current-loop)
- [Ampère — OpenStax](https://openstax.org/books/university-physics-volume-2/pages/12-5-amperes-law)
- [Solenoïden — OpenStax](https://openstax.org/books/university-physics-volume-2/pages/12-6-solenoids-and-toroids)
- [Generatoren — OpenStax](https://openstax.org/books/university-physics-volume-2/pages/13-6-electric-generators-and-back-emf)
- [Maxwell — OpenStax](https://openstax.org/books/university-physics-volume-2/pages/16-1-maxwells-equations-and-electromagnetic-waves)

## Schakelingen en wisselstroom

- [Ohm — OpenStax](https://openstax.org/books/university-physics-volume-2/pages/9-4-ohms-law)
- [Weerstand en resistiviteit — OpenStax](https://openstax.org/books/university-physics-volume-2/pages/9-3-resistivity-and-resistance)
- [Kirchhoff — OpenStax](https://openstax.org/books/university-physics-volume-2/pages/10-3-kirchhoffs-rules)
- [RLC — OpenStax](https://openstax.org/books/university-physics-volume-2/pages/15-3-rlc-series-circuits-with-ac)
- [AC-vermogen — OpenStax](https://openstax.org/books/university-physics-volume-2/pages/15-4-power-in-an-ac-circuit)
- [Transformatoren — OpenStax](https://openstax.org/books/university-physics-volume-2/pages/15-6-transformers)
- [Driefasige netwerken — MIT OpenCourseWare, hoofdstuk 3](https://www.ocw.mit.edu/courses/6-061-introduction-to-electric-power-systems-spring-2011/c6393a58319200a5344752de0cf47ec4_MIT6_061S11_ch3.pdf)
- [Wikkelingsklemmen en ster/driehoek — Wilo, aansluitdocument](https://cms.media.wilo.com/dcianimpfinder/wilo532894/6520765/Flumen%20Excel%20Opti%2020-40/en-GB/113794955.html)

## Wat de modellen wel en niet voorstellen

- De rotoranimatie toont een tweepolige magneet en zes actieve spoelzijden. Per wikkeling staan de zijden diametraal tegenover elkaar. Zij staan 90° ten opzichte van de spoelnormaal; de spoelnormalen staan 120° uit elkaar. De spoeltekening is geen constructietekening of ruimtelijk veldmodel.
- De rotoranimatie volgt relatieve flux `cos(θ)` en spanning `sin(θ)` met dezelfde hoekreferentie; de wikkelingen zijn 120° elektrisch verschoven.
- U1–U2, V1–V2 en W1–W2 zijn windingparen. L1, L2 en L3 zijn lijnnamen. Spanning uU is hier van U1 naar U2 gemeten, overeenkomstig de gekozen polariteit.
- Op het klemmenbord is de bovenrij U1–V1–W1 en de onderrij W2–U2–V2. Ster koppelt U2, V2 en W2 samen; driehoek koppelt U1–W2, V1–U2 en W1–V2. De labels bepalen de verbinding, niet de plaats op een werkelijk bord.
- Bij gelijkblijvende ideale generatorwikkelingsspanning geldt in ster UL = √3 Uf, en in driehoek UL = Uf. Het omschakelen van een belasting op dezelfde vaste externe lijnspanning is een andere situatie.
- De rekenlabs zijn afzonderlijke modellen. Ze simuleren geen windingweerstand, armatuurreactie, kernverzadiging, wervelstromen, hysterese, harmonischen, regelaar of mechanische dynamiek.
- De generatorcalculator neemt sinusvormige flux, gelijke flux per winding en windingfactor 1 aan. Voor meerdere poolparen gebruikt hij de elektrische frequentie, geen extra grafisch getekende polen.
- De RMS-factor √2 en de eenvoudige vermogensfactor cos φ nemen sinusvormige signalen aan. De drie-fasenformules nemen symmetrie aan.
- RLC is een lumped seriekring in stationaire sinusbedrijfstoestand. Een leeg C-veld betekent dat er geen condensator in serie is opgenomen.
- B in het fluxlab en v in het Lorentzlab worden voor leesbaarheid geometrisch geschaald; de weergegeven componentwaarden zijn de werkelijke numerieke berekeningen.
- Fasoren in het vectorlab hebben RMS-lengten. Met de gekozen sinusconventie is de momentane spanning √2 maal de y-projectie. De grote verschilpijl en de stippellijn tussen de twee fasoruiteinden stellen dezelfde vector voor.

Deze editie behandelt de relevante basis en verdieping voor generatoren en hun belastingen; zij pretendeert niet alle wetten uit de volledige natuurkunde te behandelen.
