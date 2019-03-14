# Opdracht 1.2

link naar oba app client side: https://boekdeelfeature.netlify.com
link naar oba app server side: [nog niet online werkend gekregen]

## Tests
- bandwidth
- Javascript
- Custom fonts
- Muis
- kleur
- localstorage
- screen reader
- device lab


## bandwidth

Mijn app is vrij licht. 

De request duurt om data op te halen duurt 4 seconden. Erg afhankelijk van hoe druk de server is. Wisselend tussen de 3 en 30 seconden.

Het weergeven van deze data 600ms.

Afbeeldingen kosten de meeste tijd. Tussen de 25ms en 200ms

Detail pagina wordt opgebouwd van de data van de earch results en is dus offline beschikbaar na een search.

## Javascript

Zonder javascript is de api niet op te vragen. Door de request serverside te maken zou ik het een en ander kunnen oplossen. Het search veld zou dan de url kunnen opvragen
met het search woord er in. Ik zou dan een skeletten terug kunnen geven en zodra de data geladen is het in kunnen vullen. 

## custom fonts

Ik gebruik open Sans met sans-serif als fallback. Variabele fonts zijn bij 84.67% van de desktopgebruikers beschikbaar.


## Muis

Met tap geef hij een duidelijke focus waar je bent. Ik kan alleen niet bij de Artikelen voor de detail pagina's. Hiervoor moet ik de eventListener's weg doen en de artikelen een link tag geven. Ik kan op de detail pagina wel bij de Add to reading list link komen.


## kleur

Prima leesbaar in zwart wit. In high contrast mode niet te lezen. Alle grijs en rood tinten worden gepusht naar zwart waardoor je de zoekbalk niet kunt onderscheiden van de achtergrond.


## localstorage

App blijft hangen op zoeken. `Failed to read the `localStorage' property from 'Window': Access is denied for this document. ` Ik zou een error scherm kunnen maken met een melding om de gebruikt te melden dat hij niet werkt zonder cookie's/localstorage. 

## Screen Reader
Hij leest alles voor in het geselecteerde blok. In principe bruikbaar maar na vergelijken met bijvoorbeeld whatsapp web een te uitgebreide informatie overload. Ik zou moeten onderzoeken hoe ik aangeef wat er precies verteld moet worden als een div geselecteerd wordt. De afbeelding naam wordt ook voor gelezen en daar staan nu getallen. Als aanpassing zou ik de afbeeldingen een naam geven die omschrijft wat er in de afbeelding te zien is.

## device lab
Site ziet er niet uit en knoppen werken niet op touchscreens. In Safari en Chrome op iPhone werken de knoppen wel. Ik gebruik event listeners die ik moet vervangen door button tags.

# Server Side
## bandwidth

Ik heb de Oba api ontweken en een op github een json file geplaatst die ik opvraag met een fetch request. Dit gaat aanzienlijk sneller dan de oba api wat logisch is. 

## Javascript
Alle javascript word op de server gedraaid. Je kunt zoeken en een detail pagina opvragen zonder problemen.

## localstorage
De data die opgehaald word van het json file word opgeslagen in een storage object. Hierdoor kun je ook zonder localstorage de webapp gebruiken.
## device lab
Knoppen werken op alle devices omdat het nu links zijn. Styling mag nog professioneler.




