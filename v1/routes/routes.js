const express = require("express");
const path = require("path");
const store = require("../models/persistence");

const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "..", "v0", "list.html"));
});

router.get("/api/tutorials", (req, res) => {
    res.json(store.tutorials);
});

router.get("/api/categories", (req, res) => {
    res.json(store.kategorien);
});

router.get("/search", (req, res) => {
    const query = (req.query.search || "").trim();
    if (!query) return res.redirect("/");

    const results = store.search(query);


    let html = `
    <html lang="de">
    <head><meta charset="UTF-8"><title>Suchergebnisse</title></head>
    <body>
        <h1>Suchergebnisse für "${query}"</h1>
    `;

    if (results.length === 0) {
        html += `<p>Keine Treffer gefunden.</p>`;
    } else {
        html += `<ul>`;
        results.forEach(t => {
            html += `
                <li>
                    <strong>${t.name}</strong> – ${t.sprache}<br>
                    ${t.beschreibung}<br>
                    Dauer: ${t.dauer}
                </li>
            `;
        });
        html += `</ul>`;
    }

    html += `<br><a href="/">Zurück</a></body></html>`;
    res.send(html);
});

router.get("/category/:name", (req, res) => {
    const name = req.params.name;
    const results = store.getTutorialsZuKategorie(name, store.tutorials);

    if (results.length === 0) {
        return res.send(`<h1>Keine Tutorials in Kategorie "${name}".</h1><a href="/">Zurück</a>`);
    }

    let html = `<h1>Kategorie: ${name}</h1><ul>`;
    results.forEach(t => {
        html += `<li>${t.name} – ${t.dauer}</li>`;
    });
    html += `</ul><a href="/">Zurück</a>`;

    res.send(html);
});

module.exports = router;
