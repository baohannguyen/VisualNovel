namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  export let transition = { //Transition runterladen und in einem Ordner speichern
    puzzle: {
      duration: 1,
      alpha: "", //relative Pfade
      edge: 1 //Härtegrad
    }
  };

  export let sound = {
    //SFX
    drop: "Audio/drop.mp3" //Pfad kommt da rein
    //Audio Ordner noch kopieren
  };

  export let locations = {
    // Backgrounds kopieren
    beachDay: {
      // Hintergrund hat mehrere Ebenen
      name: "Beach Day",
      background: "" // Pfad kommt hin
      // foreground: ""
    }
  };

  export let chracters = {
    narrator: {
      // name: ""  Anzeigename vom Narrator
    },
    protagonist: {
      name: ""
    },
    aisaka: { //Charakter Name
      name: "Aisaka",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "", //Pfad des Bildes
        happy: "",
        upset: ""
      } 
    }
  };


  export let dataForSave = {
    nameProtagonist: ""
  };

  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: Scene, name: "Scene" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}