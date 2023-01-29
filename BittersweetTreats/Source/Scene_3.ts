namespace Novel {
    export async function scene_3(): ƒS.SceneReturn {
        console.log("Scene 3");

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.blackScreen);
        await ƒS.update(transition.stripes.duration, transition.stripes.alpha, transition.stripes.edge);
        await ƒS.update();
        await ƒS.Text.print("Innerhalb einer Woche hat sich Celeste für die Stelle beworben. Nach ein paar Tagen hat sie eine Antwort bekommen und muss, um die Stelle zu kriegen Probearbeiten.");
        
    }
}