namespace Novel {
    export async function scene_3(): ƒS.SceneReturn {
        console.log("Scene 3");

        let text = {
            narrator: {
                TX01: "Innerhalb einer Woche hat sich Celeste für die Stelle beworben. Nach ein paar Tagen hat sie eine Antwort bekommen und muss, um die Stelle zu kriegen Probearbeiten."
            }
        };

        await ƒS.Location.show(locations.blackScreen);
        await ƒS.update();
        await ƒS.Speech.tell(characters.narrator, text.narrator.TX01);
        
    }
}