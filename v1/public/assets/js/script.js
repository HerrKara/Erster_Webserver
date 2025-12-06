//function getViewportWidth() {
//    return window.innerWidth ||
//    document.documentElement.clientWidth;
//    }

//console.log("Die Viewport-Breite beträgt: " + getViewportWidth() + " Pixel");

function Bild(url, name) {
    this.url=url;
    this.name=name;
}

//Objekte einfügen per Konstruktorfunktion 
function Kategorie(name, Bild) {
    this.name=name;
    this.Bild=Bild;
}


function Kapitel(name, beschreibung, dauer) {
    this.name=name;
    this.beschreibung=beschreibung;
    this.dauer=dauer;
}

function Tutorial(name, sprache, beschreibung, dauer, datum, url, embedCode, Bild) {
    this.name=name;
    this.sprache=sprache;
    this.beschreibung=beschreibung;
    this.dauer=dauer;
    this.datum= new Date(datum);
    this.url=url;
    this.embedCode=embedCode;

    this.Bild = Bild;

    this.kapitelliste = [];
    this.kategorien = [];

    this.fuegeKategieHinzu = function(kat) {
        this.kategorien.push(kat);
        tutorial1.katogorien.sort((a,b) => a.name.localeCompare(b.name));
    };

    this.fuegeKategorieHinzu = function(kap) {
        this.kapitelliste.push(kap);
        tutorial1.katogorien.sort((a,b) => a.name.localeCompare(b.name));
    };

}

//Vom Inet geholt: (muss erklärt werden)
function getDauerInStundenUndMinuten(dauer) {
    if (!/^\d{2}:\d{2}$/.test(dauer)) {
        throw new Error("Dauer muss im Format 'HH:MM' vorliegen.");
    }
    const [stunden, minuten] = dauer.split(":").map(Number);
    return `${stunden} Std. ${minuten} Min.`;
}


//A2
//Ertsellung von Kategorien mit Bild
const kategorie1 = new Kategorie("Kochen", new Bild("https://cdn.pixabay.com/photo/2023/02/18/11/22/cactus-7797750_1280.jpg", "einName"));
const kategorie2 = new Kategorie("Stricken", new Bild("https://cdn.pixabay.com/photo/2023/02/18/11/22/cactus-7797750_1280.jpg", "einName"));
const kategorie3 = new Kategorie("Zeichnen", new Bild("https://cdn.pixabay.com/photo/2023/02/18/11/22/cactus-7797750_1280.jpg", "einName"));
const kategorie4 = new Kategorie("Microsoft Office", new Bild("https://cdn.pixabay.com/photo/2023/02/18/11/22/cactus-7797750_1280.jpg", "einName"));
const kategorie5 = new Kategorie("Web-Anwendung", new Bild("https://cdn.pixabay.com/photo/2023/02/18/11/22/cactus-7797750_1280.jpg", "einName"));

//erstellung von Tutorials mit Bild
const tutorial1 = new Tutorial(
    "Node.js Grundlagen",
    "DE",
    "Einführung in Node.js und erste Schritte",
    "01:30",
    "https://example.com/nodejs",
    "<iframe>Node.js Video</iframe>",
    new Bild("https://cdn.pixabay.com/photo/2023/02/18/11/22/cactus-7797750_1280.jpg", "einName")
);

const tutorial2 = new Tutorial(
    "js Grundlagen",
    "DE",
    "Einführung in js und erste Schritte",
    "01:37",
    "https://example.com/nodejs",
    "<iframe>js Video</iframe>",
    new Bild("https://cdn.pixabay.com/photo/2023/02/18/11/22/cactus-7797750_1280.jpg", "einName")
);

//Erstellung von Kapitel und Zuweisung auf Tutorials
tutorial1.fuegeKapitelHinzu(new Kapitel("Einführung", "Grundlagen der node-Konsole", "00:15"));
tutorial1.fuegeKapitelHinzu(new Kapitel("Datentypen", "Das fs-Modul", "00:45"));
tutorial1.fuegeKapitelHinzu(new Kapitel("Funktionen", "Das http-Modul", "01:00"));
tutorial2.fuegeKapitelHinzu(new Kapitel("Einführung", "Grundlagen der js-Programmierung", "00:15"));
tutorial2.fuegeKapitelHinzu(new Kapitel("Datentypen", "Wo sind die Datentypen", "00:45"));
tutorial2.fuegeKapitelHinzu(new Kapitel("Funktionen", "Erstellung und Verwendung von Funktionen", "01:00"));

//zuweisung Kategorie uaf tutorial
tutorial1.fuegeKategorieHinzu(kategorie1);
tutorial1.fuegeKategorieHinzu(kategorie2);
tutorial2.fuegeKategorieHinzu(kategorie3);
tutorial2.fuegeKategorieHinzu(kategorie4);

//Sotierung der kategorien nach Name


// Funktion zur Suche nach Tutorials zu einer Kategorie
//function getTutorialsZuKategorie(kategorieName) 
//keine Ahnung wie das gehen soll
//internet:
const tutorials = [tutorial1, tutorial2];
function getTutorialsZuKategorie(kategorieName) {
    return tutorials.filter(tutorial => tutorial.kategorien.some(kat => kat.name === kategorieName));
}

// Ausgabe aller Daten
// Aus dem Internet (bitte eine erklärung)
for (const kategorie of kategorien) {
    console.log(`Kategorie: ${kategorie.name}`);
    console.log(`Bild: ${kategorie.bild.name}`);

    const zugeordneteTutorials = getTutorialsZuKategorie(kategorie.name);
    for (const tutorial of zugeordneteTutorials) {
        console.log(` ${tutorial.name} (${tutorial.sprache}) ${tutorial.datum.toDateString()}`);
        console.log(` ${tutorial.beschreibung}`);
        console.log(` ${getDauerInStundenUndMinuten(tutorial.dauer)}`);
        console.log(` ${tutorial.embedCode || tutorial.url}`);

        for (const kapitel of tutorial.kapitelliste) {
            console.log(` ${kapitel.dauer} ${kapitel.name}:`);
            console.log(` ${kapitel.beschreibung}`);
        }
    }
    console.log("..............................................");
}

//Kontrolle
console.log("Sortierte Kategorien:");
kategorien.forEach(kategorie => console.log(kategorie.name));

kategorien.forEach(kategorie => {
    const tutorials = getTutorialsZuKategorie(kategorie.name);
    console.log(`Kategorie: ${kategorie.name}`);
    tutorials.forEach(tutorial => {
        console.log(`- ${tutorial.name} (${tutorial.sprache})`);
    });
});

for (const kategorie of kategorien) {
    console.log(`Kategorie: ${kategorie.name}`);
    console.log(`Bild: ${kategorie.bild.name}`);

    const zugeordneteTutorials = getTutorialsZuKategorie(kategorie.name);
    for (const tutorial of zugeordneteTutorials) {
        console.log(` ${tutorial.name} (${tutorial.sprache}) ${tutorial.datum.toDateString()}`);
        console.log(` ${tutorial.beschreibung}`);
        console.log(` ${getDauerInStundenUndMinuten(tutorial.dauer)}`);
        console.log(` ${tutorial.embedCode || tutorial.url}`);

        for (const kapitel of tutorial.kapitelliste) {
            console.log(` ${kapitel.dauer} ${kapitel.name}:`);
            console.log(` ↳${kapitel.beschreibung}`);
        }
    }
    console.log("..............................................");
}
