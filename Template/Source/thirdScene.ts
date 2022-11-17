namespace Novel { 
    export async function thirdScene(): ƒS.SceneReturn {
        console.log("Third Scene");

        //Animation-Beispiiel
        ƒS.Speech.hide();
        await ƒS.Character.show(characters.komi, characters.komi.pose.happy, ƒS.positionPercent(50, 105));
        await ƒS.Location.show(locations.sunset);
        ƒS.update();
        // await ƒS.Character.animate(characters.komi, characters.komi.pose.happy, examAnimation());
        await ƒS.Character.animate(characters.komi, characters.komi.pose.happy, getAnimation());

    }
}