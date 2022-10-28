namespace Novel {
    export async function secondScene(): ƒS.SceneReturn {
        console.log("Second Scene");
        let text = {
            Komi: {
                TX01: "Danke fürs Begleiten.",
                TX02: "Der Ort ist sehr schön."
            }
        };

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.sunset);
        await ƒS.Character.show(characters.komi, characters.komi.pose.happy, ƒS.positionPercent(50, 105));
        await ƒS.update();
        await ƒS.Speech.tell(characters.komi, text.Komi.TX01);
        await ƒS.Speech.tell(characters.komi, text.Komi.TX02);

        
    }
}