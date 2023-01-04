namespace Novel {
    export async function scene_7(): ƒS.SceneReturn {
        console.log("Normal Ending");

        let text = {
            celeste: {
                TX01: "<i>Ich kann gar nicht einschätzen, ob ich den Job jetzt kriege oder nicht.</i>",
                TX02: "<i>An Evans Gesichtsausdruck kann ich es auch nicht wirklich ablesen.</i>",
                TX03: "Und wie fandest du bis jetzt meine Arbeit?",
                TX04: "Das Mischen war doch schwieriger als ich dachte.",
                TX05: "Wirklich?",
                TX06: "Danke, dass ich die Stelle bekommen habe.",
                TX07: "Ich werde mich verbessern, das wäre ich dir versprechen."
            },
            evan: {
                TX01: "Ich fand, dadurch dass du es zum ersten Mal gemacht hast, war deine Leistung durchschnittlich.",
                TX02: "Es sind dir dennoch ein paar Fehler passiert.",
                TX03: "Ich würde dich trotzdem einstellen, weil ich Potenzial in dir sehe und glaube, dass du besser wirst, je öfter du das machst.",
                TX04: "Aber bei deinen nächsten Schichten, werde ich trotzdem da sein und es bei dir kontrollieren, damit dir nicht mehr so oft Fehler vorkommen"
            }
        };

        await ƒS.Speech.tell(characters.celeste, text.celeste.TX01);

        await ƒS.Text.print("Du hast das Normal Ending erreicht");
        
    }
}