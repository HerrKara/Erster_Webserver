const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/assets", express.static(path.join(__dirname, "..", "v0", "assets")));

app.use("/", require("./routes/routes"));

app.use((req, res) => {
    res.status(404).send("404 – Seite wurde nicht gefunden");
});

app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
