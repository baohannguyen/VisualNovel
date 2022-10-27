namespace Template { 
  export async function Scene(): ƒS.SceneReturn { //Wait = wartet bis der Spieler weiterklickt
    console.log("FudgeStory Template Scene starting"); //Name der Szene
    let text = { //Text wird hier angelegt
      Komi: {
        T001: "Hallo",
        T002: "Alles gut soweit?",
        T003: "Anderer Text"
      }
    };

    ƒS.Speech.hide(); //versteckt am Anfang die Textbox, wenn die Szene angezeigt wird
    await ƒS.Location.show(locations.benchPlace);
    await ƒS.Character.show(characters.komi, characters.komi.pose.happy, ƒS.positionPercent(70, 100));
    await ƒS.update(); //Nach jeder Szene updaten
    await ƒS.Speech.tell(characters.komi, text.Komi.T001); //hier spricht der Charakter; bei text muss man nie updaten
  }
}