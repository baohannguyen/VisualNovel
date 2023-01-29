namespace Novel {
    export async function scene_4(): ƒS.SceneReturn {
        console.log("Scene 4");
        
        let text = {
            celeste: {
                TX01: "<i>Wow das Café sieht richtig schön aus.</i>",
                TX02: "<i>Hier ist auch eine Menge los.</i>",
                TX03: "<i>Ich muss den Chef Evan finden.</i>",
                TX04: "<i>Er hat gemeint, dass wir uns am Tresen treffen werden.</i>",
                TX05: "Entschuldigung, ich suche gerade nach ihrem Chef Evan.",
                TX06: "Wir haben einen Termin vereinbart.",
                TX07: "Ja genau, es freut mich auch Sie kennenzulernen.",
                TX08: "<i>Ich muss also für die Kunden Getränke mischen, damit ich die Stelle bekomme.</i>",
                TX09: "<i>Das werde ich auf jeden Fall hinkriegen.</i>",
                TX10: "Ja ich habe alles verstanden.",
                TX11: "Wir können direkt loslegen."
            },
            evan: {
                TX01: "Ah Hallo du bist Celeste richtig?",
                TX02: "Schön dich kennenzulernen, ich bin Evan.",
                TX03: "Wir haben bis jetzt wegen deiner Bewerbung nur telefoniert.",
                TX04: "Du kannst mich gerne duzen.",
                TX05: "Nun zu deiner Bewerbung.",
                TX06: "Ich fand sie sehr vielversprechend und glaube, dass du gut zu uns passen würdest.",
                TX07: "Aber ich hab dich erstmal zum Probearbeiten eingeladen, weil ich sehen möchte wie du mit den Aufgaben zurechtkommst.",
                TX08: "<i>Lovely Java</i> ist bekannt für seine verschiedene Getränke und Kaffees, die wir für unsere Kunden mischen.",
                TX09: "Aus dem Grund wirst du heute ein paar Getränke mischen.",
                TX10: "Du kriegst eine Liste, wo drauf steht aus welchen Zutaten, die einzelnen Getränken und Kaffees bestehen.",
                TX11: "Die Liste kannst du dir jederzeit anschauen, falls du nicht weiterweißt.",
                TX12: "Hast du soweit alles verstanden?",
                TX13: "Das höre ich doch gerne."
            }
        };

        let signalDelay1: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);
        let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);

        ƒS.Speech.hide();
        ƒS.Sound.play(music.cafe_theme, 0.3, true);
        await ƒS.Location.show(locations.cafe);
        await ƒS.update(transition.boxes.duration, transition.boxes.alpha, transition.boxes.edge);
        await signalDelay2();
        await ƒS.update();
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX01);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX02);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX03);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX04);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX05);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX06);
        await ƒS.Speech.tell(characters.evan, text.evan.TX01);
        await ƒS.Speech.tell(characters.evan, text.evan.TX02);
        await ƒS.Speech.tell(characters.evan, text.evan.TX03);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX07);
        await ƒS.Speech.tell(characters.evan, text.evan.TX04);
        await ƒS.Speech.tell(characters.evan, text.evan.TX05);
        await ƒS.Speech.tell(characters.evan, text.evan.TX06);
        await ƒS.Speech.tell(characters.evan, text.evan.TX07);
        await ƒS.Speech.tell(characters.evan, text.evan.TX08);
        await ƒS.Speech.tell(characters.evan, text.evan.TX09);
        await ƒS.Speech.tell(characters.evan, text.evan.TX10);
        await ƒS.Speech.tell(characters.evan, text.evan.TX11);
        await ƒS.Speech.tell(characters.evan, text.evan.TX12);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX08);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX09);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX10);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX11);
        await ƒS.Speech.tell(characters.evan, text.evan.TX13);

        await signalDelay1();

        await ƒS.Text.print("Oben im Menü siehst jetzt zwei neue Bereiche, die Getränke- und Zutatenliste.<p>Auf die beiden Listen kannst du jederzeit zugreifen, falls du beim Mischen der Getränke Hilfe brauchst</p>");
        ƒS.Text.close();
        

    }
}