const http = require("http");
const url = require("url");
const persistence = require("./models/persistence");
const fs = require("fs");

let server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    const queryParams = url.parse(req.url, true).query;
    const html = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Liste aller Kategorien</title>
        <link rel="stylesheet" href="../v0/assert/css/style.css">
        <link rel="stylesheet" href="../v0/assert/css/flexbox.css">
        <link rel="stylesheet" href="../v0/assert/css/tiles.css">
    </head>

    <body>
        <header>
            <img src="./assert/img/Logo.webp" alt="Logo der Website" width="50" />
            <h1>TutoriWeb</h1>
        </header>

        <nav>
            <a href="./list.html">Kategorien</a> 
            <a href="./tutorials.html">Alle Tutorials</a> 
            <a href="./tutorial.html">Tutorial</a> 
            <a href="./form.html">Neues Tutorial</a>
        </nav>

        
        <main>
                <h2 style="color= blue">Tutorials mit: ${queryParams.kategorien
        }</h2>
    <ul> ${createListItem(queryParams)} </ul>
        </main>

        <aside>
            <h3>Neue Tutorials</h3>
            <ul>
                <li>
                    <strong>Pasta alla Carbonara</strong> - 20. April 2023 - 2
                    Std. 10 Min.
                </li>
                <li>
                    <strong>Pickatchu Mütze</strong> - 15. April 2023 - 3 Std.
                    05 Min.
                </li>
                <li>
                    <strong>Perfekte Steaks braten</strong> - 10. April 2023 - 1
                    Std. 45 Min.
                </li>
                <li>
                    <strong>Java Grundlagen</strong> - 5. April 2023 - 4 Std. 30
                    Min.
                </li>
                <li>
                    <strong>Morph Übergan in Powerpoint</strong> - 1. April 2023
                    - 2 Std. 00 Min.
                </li>
            </ul>
        </aside>
    </div>
</fieldset>

        <footer>
            <p>
                <small
                    >&copy; 2024 TutoriWeb from Muhammed Kara and Kiyan do Lago Martins.
                    Alle Rechte vorbehalten.</small
                >
            </p>
        </footer>
    </body>
    <script src="./assert/js/script.js"></script>
</html>
`;
    console.log(queryParams);
    res.end(html);
});

server.listen(8844, function () {
    console.log("Server is running at http://localhost:8844");
});

const createListItem = function (queryParams) {
    let result = "";
    for (let kategorie of persistence.kategorien) {
        if (queryParams.kategorien === kategorie.name) {
            result += `<li> ${kategorie.name} </li>`;
        }
    }
    if (result === "") {
        result = `Keine Tutorials gefunden!`;
    }
    return result;
};
