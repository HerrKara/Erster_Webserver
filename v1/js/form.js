
    const dauer = document.querySelector("#dauer");
    const textTutorial = document.getElementById("textTutorial");
    const videoTutorial = document.getElementById("videoTutorial");
    let inhalt = document.querySelector("#inhalt");

    // Event für Text-Tutorial
    textTutorial.addEventListener("change", function () {
    if (textTutorial.checked === true) {
        dauer.removeAttribute("required");
        console.log("Dauer required (Text-Tutorial):", dauer.required);

        const textarea = document.createElement("textarea");
        textarea.id = "inhalt";
        textarea.name = "content";
        textarea.required = true;
        textarea.placeholder = "Gib deinen Inhalt ein";

        inhalt.parentNode.replaceChild(textarea, inhalt);

        inhalt = textarea; 
        }
    });
    // Event für Video-Tutorial
    videoTutorial.addEventListener("change", function () {
        if (videoTutorial.checked === true) {
            dauer.setAttribute("required", "");
            console.log("Dauer required (Video-Tutorial):", dauer.required);

            const input = document.createElement("input");
            input.type = "url";
            input.id = "inhalt";
            input.name = "content";
            input.required = true;
            input.placeholder = "https://www.beispiel.de/spiel";
    
            inhalt.parentNode.replaceChild(input, inhalt);
            inhalt = input; // Referenz aktualisieren
        }
    });
