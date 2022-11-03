namespace Novel { 
  export async function firstScene(): ƒS.SceneReturn { //Wait = wartet bis der Spieler weiterklickt
    console.log("First Scene"); //Name der Szene
    let text = { //Text wird hier angelegt
      Komi: {
        TX01: "Hallo",
        TX02: "Alles gut soweit?",
        TX03: "Mein Name ist Komi."
      }
    };

    ƒS.Speech.hide(); //versteckt am Anfang die Textbox, wenn die Szene angezeigt wird
    await ƒS.Location.show(locations.park);
    await ƒS.Character.show(characters.komi, characters.komi.pose.happy, ƒS.positionPercent(50, 105));
    await ƒS.update(); //Nach jeder Szene updaten
    //wenn man ne Zahl in die Klammer eingibt, dann zeigt es die Fade-Transition an
    await ƒS.Speech.tell(characters.komi, text.Komi.TX01); //hier spricht der Charakter; bei text muss man nie updaten
    await ƒS.Speech.tell(characters.komi, text.Komi.TX02);
    await ƒS.Speech.tell(characters.komi, text.Komi.TX03);
  }
}