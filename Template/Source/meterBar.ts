namespace Novel {
    export async function meterBar(): ƒS.SceneReturn {
        console.log("Meter Bar");
        let text = {
            Komi: {
                TX01: "Hallo",
                TX02: "Alles gut soweit?",
                TX03: "Mein Name ist Komi."
            }
        };

        // Code um die Bar auszublenden (die ersten zwei Codes muss man ausblenden)
        // dataForSave.pickedMeterScene = true;
        // document.getElementsByName("aisakaScore").forEach(meterStuff => meterStuff.hidden = true);
        // document.getElementById("scoreForAisaka").style.display = "none";

        dataForSave.aisakaScore += 50; // 50 Punkte würden dazukommen
        console.log(dataForSave.aisakaScore);

        await ƒS.Location.show(locations.park);
        await ƒS.Character.show(characters.komi, characters.komi.pose.happy, ƒS.positionPercent(30, 100));
        await ƒS.update();

        await ƒS.Speech.tell(characters.komi, text.Komi.TX01);
        await ƒS.Speech.tell(characters.komi, text.Komi.TX02);
        await ƒS.Speech.tell(characters.komi, text.Komi.TX03);

    }
}