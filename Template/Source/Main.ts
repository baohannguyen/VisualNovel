namespace Novel {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  export let transition = {
    hearts: {
      duration: 1,
      alpha: "FreeTransitions/Others/hearts.jpg",
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
    aisaka: {
      name: "Aisaka",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "Images/Characters/aisaka_angry.png",
        happy: "Images/Characters/aisaka_happy.png",
        upset: "Images/Characters/aisaka_upset.png"
      }
    },
    komi: {
      name: "Komi",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "Images/Characters/aisaka_angry.png", //Pfad des Bildes
        happy: "Images/celesteTest2.png",
        upset: "Images/Characters/aisaka_upset.png"
      }
    }
  };

  // Items für inventory
  export let items = {
    item1: {
      name: "Item 1",
      description: "Beschreibung des Items", //das was unter dem item angezeigt wird
      image: "Images/Splash.png", //Pfad des Bildes
      static: true //wenn man es als konsumierbares Objekt benutzen möchte dann true
    }
  };

  // alles was wir speichern wollen, wenn man auf den Button "Speichern" klickt, sollen auch gespeichert werden
  // hier kommt alles rein, was der Spieler speichern möchte
  export let dataForSave = {
    nameProtagonist: "",
    interrupt: false, //booleasche werte kann man hier festlegen und danach im Dialog wiederverwenden
    characterPoints: 0
  };

  // export function examAnimation(): ƒS.AnimationDefinition {
  //   return {
  //     start: {
  //       translation: ƒS.positions.bottomcenter, color: ƒS.Color.CSS("blue", 1)
  //     },
  //     end: {
  //       translation: ƒS.positions.bottomleft, color: ƒS.Color.CSS("red", 0) //Figur verschwindete, weil Transparenz = 0 ist
  //     },
  //     duration: 3,
  //     playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
  //   };

  // }

  export function getAnimation(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("white", 0.3) },
      end: { translation: ƒS.positions.bottomright, rotation: 20, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("red") },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }


  // function credits(): void {
  //   ƒS.Text.print("");
  // }

  //Menu
  let inGameMenuButtons = {
    save: "Save",
    load: "Load",
    close: "Close",
    credits: "Credits"
  };

  let gameMenu: ƒS.Menu;

  // true = Menü ist offen 
  let menuIsOpen: boolean = true;

  async function buttonFunctions(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case inGameMenuButtons.save:
        await ƒS.Progress.save();
        break;
      case inGameMenuButtons.load:
        await ƒS.Progress.load();
      case inGameMenuButtons.close:
        gameMenu.close();
        menuIsOpen = false; //false = Menü ist zu
        break;
    }

  }

  // Menü shortcuts
  document.addEventListener("keydown", hndKeyPress);
  async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F:
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.G:
        console.log("Load");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.M:
        if (menuIsOpen) {
          console.log("Close");
          gameMenu.close();
          menuIsOpen = false;
        }
        else {
          console.log("Open");
          gameMenu.open();
          menuIsOpen = true;
        }
        break;


    }
  }

  window.addEventListener("load", start);
  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctions, "gameMenuCSS"); //eigene CSS Klasse für das Menü
    buttonFunctions("Close");
    let scenes: ƒS.Scenes = [
      { scene: firstScene, name: "Park Scene" },
      { scene: secondScene, name: "Sunset Scene" }
      //{ scene: thirdScene, name: "Animation Scene" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}