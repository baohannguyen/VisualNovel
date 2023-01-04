namespace Novel {
    export async function scene_6(): ƒS.SceneReturn {
        console.log("Good Ending");

        let text = {
            celeste: {
                TX01: "Das freut mich zu hören. Es hat auch Spaß gemacht.",
                TX02: "Aber was heißt das jetzt?",
                TX03: "Danke, dass ich den Job kriege. Sie werden es nicht bereuen mich eingestellt zu haben.",
                TX04: "Mamaa!",
                TX05: "Ich hab die Stelle bei 'Lovely Java' bekommen.",
                TX06: "Ich bin so froh, dass ich den Job habe, jetzt muss du dir nicht mehr so viele Sorgen machen."
            },
            evan: {
                TX01: "Du hast wirklich gute Arbeit geleistet, Celeste. Die Getränke hast du alle richtig gemischt und die Kunden waren alle zufrieden damit.",
                TX02: "Das heißt, dass du natürlich von uns eingestellt wirst und du die Stelle kriegst.",
                TX03: "Also über deine heutige Leistung kann ich mich nicht beschweren.",
                TX04: "Auf eine gute Zusammenarbeit, Celeste."
            },
            celeste_mum: {
                TX01: "Das hat mich richtig erschreckt. Was ist passiert?",
                TX02: "Oh da, wofür du dich letzte Woche beworben hast?",
                TX03: "Das freut mich, mein Schatz. Ich bin richtig stolz auf dich."
            }
        };

        await ƒS.Location.show(locations.cafe);
        await ƒS.Speech.tell(characters.evan, text.evan.TX01);

        await ƒS.Text.print("Du hast das Good Ending erreicht.");
        
    }
}