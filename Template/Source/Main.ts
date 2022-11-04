namespace Novel {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  export let transition = { //Transition runterladen und in einem Ordner speichern
    hearts: {
      duration: 1,
      alpha: "FreeTransitions/Others/hearts.jpg", //relative Pfade
      edge: 0.2 //Härtegrad
    }
  };

  export let sound = {
    //Theme
    loungeTheme: "Audio/Themes/thelounge.mp3" //« Music by: Bensound.com/royalty-free-music »
  };

  export let locations = {
    park: {
      // Hintergrund hat mehrere Ebenen
      name: "Park Day",
      background: "Background/bg_bench.png" // Pfad kommt hin
      // foreground: ""
    },
    sunset: {
      name: "Sunset",
      background: "Background/bg_city_sunset.png"
    }
  };

  export let characters = {
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
        angry: "Images/Characters/aisaka_angry.png", //Pfad des Bildes
        happy: "Images/Characters/aisaka_happy.png",
        upset: "Images/Characters/aisaka_upset.png"
      } 
    },
    komi: {
      name: "Komi",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "Images/Characters/aisaka_angry.png", //Pfad des Bildes
        happy: "Images/Characters/aisaka_happy.png",
        upset: "Images/Characters/aisaka_upset.png"
      } 
    }
  };


  export let dataForSave = {
    nameProtagonist: ""
  };

  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: firstScene, name: "Park Scene" },
      { scene: secondScene, name: "Sunset Scene" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}