// Konstruktoren
function Bild(url, name) {
    this.url = url;
    this.name = name;
}

function Kategorie(name, bild) {
    this.name = name;
    this.bild = bild;
}

function Kapitel(name, beschreibung, dauer) {
    this.name = name;
    this.beschreibung = beschreibung;
    this.dauer = dauer;
}

function Tutorial(name, sprache, beschreibung, dauer, datum, url, embedCode, bild) {
    this.name = name;
    this.sprache = sprache;
    this.beschreibung = beschreibung;
    this.dauer = dauer;
    this.datum = new Date(datum);
    this.url = url;
    this.embedCode = embedCode;
    this.bild = bild;

    this.kapitelliste = [];
    this.kategorien = [];

    this.fuegeKategorieHinzu = function (kat) {
        this.kategorien.push(kat);
    };

    this.fuegeKapitelHinzu = function (kapitel) {
        this.kapitelliste.push(kapitel);
    };
}

// Suchen nach Name
function getTutorialsByName(searchTerm) {
    const q = searchTerm.toLowerCase();
    return tutorials.filter(t => t.name.toLowerCase().includes(q));
}

// Tutorials nach Kategorie
function getTutorialsZuKategorie(name, tutorials) {
    return tutorials.filter(t =>
        t.kategorien.some(k => k.name === name)
    );
}

// Volltextsuche
function search(query) {
    const q = query.toLowerCase();
    return tutorials.filter(t =>
        t.name.toLowerCase().includes(q) ||
        t.beschreibung.toLowerCase().includes(q) ||
        t.sprache.toLowerCase().includes(q) ||
        t.kategorien.some(k => k.name.toLowerCase().includes(q))
    );
}

// Beispielkategorien
const kategorien = [
    new Kategorie("Kochen", new Bild("https://example.com/image1.jpg", "Bild1")),
    new Kategorie("Stricken", new Bild("https://example.com/image2.jpg", "Bild2")),
];

// Beispieltutorials
const tutorials = [
    new Tutorial(
        "Node.js Grundlagen",
        "DE",
        "Einführung in Node.js",
        "01:30",
        "2023-01-01",
        "https://example.com/nodejs",
        "<iframe>Node.js Video</iframe>",
        new Bild("https://example.com/image1.jpg", "Bild1")
    ),
    new Tutorial(
        "JavaScript Grundlagen",
        "DE",
        "Einführung in JavaScript",
        "02:00",
        "2023-01-02",
        "https://example.com/js",
        "<iframe>JavaScript Video</iframe>",
        new Bild("https://example.com/image2.jpg", "Bild2")
    ),
];

// Kategorien zuordnen
tutorials[0].fuegeKategorieHinzu(kategorien[0]);
tutorials[1].fuegeKategorieHinzu(kategorien[0]);

module.exports = {
    Bild,
    Kategorie,
    Kapitel,
    Tutorial,
    kategorien,
    tutorials,
    getTutorialsByName,
    getTutorialsZuKategorie,
    search
};
