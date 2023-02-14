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
        ƒS.Sound.play(sound.theme2, 0.4, false);
        await ƒS.Location.show(locations.sunset);
        await ƒS.update(transition.hearts.duration, transition.hearts.alpha, transition.hearts.edge);
        await ƒS.Character.show(characters.komi, characters.komi.pose.happy, ƒS.positionPercent(50, 105));
        await ƒS.update();
        await ƒS.Speech.tell(characters.komi, text.Komi.TX01);
        await ƒS.Speech.tell(characters.komi, text.Komi.TX02);
        await ƒS.Character.hide(characters.komi);
        await ƒS.update();

        //Entscheidungsmöglichkeiten
        let choicesSunset = {
            sayYes: "Ja",
            sayOk: "Ok",
            sayNo: "Nicht wirklich"
        };

        // let choicesNewSunset = {
        //     beach: "Wir können zum Strand gehen",
        //     mall: "Lass uns shoppen gehen"
        // };

        let dialogueElement = await ƒS.Menu.getInput(choicesSunset, "choicesCSSClass");
        // let dialogueElement1 = await ƒS.Menu.getInput(choicesNewSunset, "choicesCSSClass");

        // do-while Schleife ist auch eine Möglichkeit

        switch (dialogueElement) {
            case choicesSunset.sayYes:
                console.log("test");
                await ƒS.Character.show(characters.komi, characters.komi.pose.happy, ƒS.positionPercent(50, 105));
                await ƒS.update();
                await ƒS.Speech.tell(characters.komi, "Das freut mich zu hören.");
                //dataForSave.characterPoints += 10; // damit kann man Punkte verteilen
                break;
            case choicesSunset.sayOk:
                console.log("test");
                await ƒS.Character.show(characters.komi, characters.komi.pose.happy, ƒS.positionPercent(50, 105));
                await ƒS.update();
                await ƒS.Speech.tell(characters.komi, "Ok");
                break;
            case choicesSunset.sayNo:
                console.log("test");
                await ƒS.Character.show(characters.komi, characters.komi.pose.upset, ƒS.positionPercent(50, 105));
                await ƒS.update();
                await ƒS.Speech.tell(characters.komi, "Oh, sollen wir dann woanders hingehen?");
                break;
        }
       
        // switch (dialogueElement1) {
        //     case choicesNewSunset.beach:
        //         console.log("beach");
        //         await ƒS.Character.show(characters.komi, characters.komi.pose.happy, ƒS.positionPercent(50, 105));
        //         await ƒS.update();
        //         await ƒS.Speech.tell(characters.komi, "Super, ich wollte schon immer den Strand besuchen.");
        //         break;
        //     case choicesNewSunset.mall:
        //         console.log("mall");
        //         await ƒS.Character.show(characters.komi, characters.komi.pose.happy, ƒS.positionPercent(50, 105));
        //         await ƒS.update();
        //         await ƒS.Speech.tell(characters.komi, "Super, ich wollte schon immer mit dir shoppen gehen.");
        //         break;
        // }
    }
}