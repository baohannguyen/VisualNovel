namespace Novel {
    export async function scene_4(): ƒS.SceneReturn {
        console.log("Scene 4");
        
        let text = {
            celeste: {
                TX01: "<i>Wow das Café sieht richtig schön aus. Hier ist auch eine Menge los.</i>",
                TX02: "<i>Ich muss den Chef Evan finden. Er hat gemeint, dass wir uns am Tresen treffen werden.</i>",
                TX03: "Entschuldigung, ich suche gerade nach ihrem Chef Evan. Wir haben einen Termin vereinbart.",
                TX04: "Ja genau, es freut mich auch Sie kennenzulernen.",
                TX05: "<i>Ich muss also für die Kunden Getränke mischen, damit ich die Stelle bekomme. Das werde ich auf jeden Fall hinkriegen.</i>",
                TX06: "Ja ich habe alles verstanden. Wir können direkt loslegen."
            },
            evan: {
                TX01: "Ah Hallo du bist Celeste richtig?",
                TX02: "Schön dich kennenzulernen, ich bin Evan. Wir haben bis jetzt wegen deiner Bewerbung nur telefoniert.",
                TX03: "Du kannst mich gerne duzen.",
                TX04: "Nun zu deiner Bewerbung.",
                TX05: "Ich fand sie vielversprechend und glaube, dass du gut zu uns passen würdest, aber ich hab dich erstmal zum Probearbeiten eingeladen, weil ich sehen möchte wie du mit den Aufgaben zurechtkommst.",
                TX06: "'Lovely Java' ist bekannt für seine verschiedene Getränke und Kaffees, die wir für unsere Kunden mischen.",
                TX07: "Aus dem Grund wirst du heute ein paar Getränke mischen.",
                TX08: "Du kriegst eine Liste, wo drauf steht aus welchen Zutaten, die einzelnen Getränken und Kaffees bestehen. Die Liste kannst du jederzeit anschauen, falls du nicht weiterweißt.",
                TX09: "Hast du bist jetzt alles verstanden?",
                TX10: "Das höre ich doch gerne."
            }
        };

        await ƒS.Location.show(locations.cafe);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX01);
    }
}