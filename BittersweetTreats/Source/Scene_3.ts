namespace Novel {
    export async function scene_3(): ƒS.SceneReturn {
        console.log("Scene 3");

        let text = {
            narrator: {
                TX01: "Innerhalb einer Woche hat sich Celeste für die Stelle beworben. Nach ein paar Tagen hat sie eine Antwort bekommen und muss, um die Stelle zu kriegen Probearbeiten."
            }
        };

        await ƒS.Location.show(locations.living_room);
        await ƒS.Speech.tell(characters.celeste_mum, text.narrator.TX01);
        
    }
}