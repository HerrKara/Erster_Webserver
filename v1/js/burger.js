document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    const links = document.querySelectorAll("nav a");
    let burger = null;

    function updateNavigation() {
        if (window.innerWidth <= 480) {
            // Erstelle das Burger-Icon, wenn es nicht existiert
            if (!burger) {
                createBurger();
            }
            // Verstecke die Links standardmäßig
            links.forEach(link => {
                link.style.display = "none";
            });
        } else {
            // Entferne das Burger-Icon und zeige die Links, wenn die Breite > 480px ist
            if (burger) {
                burger.remove();
                burger = null;
            }
            links.forEach(link => {
                link.style.display = "inline-block"; // Zeige Links horizontal
            });
            nav.style.flexDirection = "row";
        }
    }

    function createBurger() {
        burger = document.createElement("button");
        burger.textContent = "☰"; // Burger-Icon
        burger.style.fontSize = "24px";
        burger.style.margin = "10px";
        burger.style.cursor = "pointer";
        nav.insertBefore(burger, nav.firstChild);

        burger.addEventListener("click", function () {
            // Toggle zwischen Links anzeigen und ausblenden
            const areLinksVisible = links[0].style.display === "block";
            links.forEach(link => {
                link.style.display = areLinksVisible ? "none" : "block";
            });
            nav.style.flexDirection = areLinksVisible ? "row" : "column";
        });
    }

    // Initialisierung und Event-Listener
    updateNavigation();
    window.addEventListener("resize", updateNavigation);
});