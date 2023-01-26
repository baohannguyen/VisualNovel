namespace Novel {
    export async function scene_6(): ƒS.SceneReturn {
        console.log("Good Ending");

        let text = {
            celeste: {
                TX01: "Das freut mich zu hören.",
                TX02: "Es hat auch Spaß gemacht.",
                TX03: "Aber was heißt das für mich jetzt?",
                TX04: "Vielen Dank, dass ich den Job kriege. ",
                TX05: "Sie werden es nicht bereuen mich eingestellt zu haben.",
                TX06: "Mamaa!",
                TX07: "Ich hab die Stelle bei <i>Lovely Java</i> bekommen.",
                TX08: "Ich bin so froh, dass ich den Job habe, jetzt muss du dir nicht mehr so viele Sorgen machen."
            },
            evan: {
                TX01: "Du hast wirklich gute Arbeit geleistet, Celeste.",
                TX02: "Die Getränke hast du alle richtig gemischt und die Kunden waren alle zufrieden damit.",
                TX03: "Das heißt, dass du natürlich von uns eingestellt wirst und du die Stelle kriegst.",
                TX04: "Also über deine heutige Leistung kann ich mich nicht beschweren.",
                TX05: "Auf eine gute Zusammenarbeit, Celeste."
            },
            celeste_mum: {
                TX01: "Das hat mich richtig erschreckt.",
                TX02: "Was ist passiert?",
                TX03: "Oh da, wofür du dich letzte Woche beworben hast?",
                TX04: "Das freut mich, mein Schatz.",
                TX05: "Ich bin richtig stolz auf dich."
            }
        };

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.office);
        await ƒS.update();
        await ƒS.Speech.tell(characters.evan, text.evan.TX01);
        await ƒS.Speech.tell(characters.evan, text.evan.TX02);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX01);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX02);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX03);
        await ƒS.Speech.tell(characters.evan, text.evan.TX03);
        await ƒS.Speech.tell(characters.evan, text.evan.TX04);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX04);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX05);
        await ƒS.Speech.tell(characters.evan, text.evan.TX05);
        
        await ƒS.Location.show(locations.living_room);
        await ƒS.update(transition.stripes.duration, transition.stripes.alpha, transition.stripes.edge);
        await ƒS.update();
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX06);
        await ƒS.Speech.tell(characters.celeste_mum, text.celeste_mum.TX01);
        await ƒS.Speech.tell(characters.celeste_mum, text.celeste_mum.TX02);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX07);
        await ƒS.Speech.tell(characters.celeste_mum, text.celeste_mum.TX03);
        await ƒS.Speech.tell(characters.celeste_mum, text.celeste_mum.TX04);
        await ƒS.Speech.tell(characters.celeste_mum, text.celeste_mum.TX05);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX08);
        await ƒS.Text.print("Du hast das Good Ending erreicht.");
        
    }
}