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
        await ƒS.update(transition.hearts.duration, transition.hearts.alpha, transition.hearts.edge);
        await ƒS.Character.show(characters.komi, characters.komi.pose.happy, ƒS.positionPercent(50, 105));
        await ƒS.update();
        await ƒS.Speech.tell(characters.komi, text.Komi.TX01);
        await ƒS.Speech.tell(characters.komi, text.Komi.TX02);

        //Entscheidungsmöglichkeiten
        let dialogue = {
            sayYes: "Yes",
            sayOk: "Ok",
            sayNo: "No"
        };

        let dialogueElement = await ƒS.Menu.getInput(dialogue, "choicesCSSClass");

        // do-while Schleife ist auch eine Möglichkeit
        
        switch (dialogueElement) {
            case dialogue.sayYes:
                console.log("test");
                break;
            case dialogue.sayOk:
                console.log("test");
                await ƒS.Speech.tell(characters.komi, "Ok");
                break;
            case dialogue.sayNo:
                console.log("test");
                break;
                
        }
        
    }
}