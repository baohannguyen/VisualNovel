namespace Novel {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;

    console.log("FudgeStory template starting");

    export let transition = {

    };

    export let sounds = {

    };

    export let music = {

    };

    export let locations = {

    };

    export let characters = {

    };

    export let items = {

    };

    export let dataForSave = {

    };

    // export function addAnimation(): ƒS.AnimationDefinition {
    //     return {
    //       start: { translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("white", 0.3) },
    //       end: { translation: ƒS.positions.bottomright, rotation: 20, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("red") },
    //       duration: 1,
    //       playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    //     };
    //   }

    // Menü
    let menuButtons = {
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
            case menuButtons.save:
                await ƒS.Progress.save();
                break;
            case menuButtons.load:
                await ƒS.Progress.load();
            case menuButtons.close:
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






        window.addEventListener("load", start);
        function start(_event: Event): void {
            gameMenu = ƒS.Menu.create(menuButtons, buttonFunctions, "menuButtonsCSS");
            buttonFunctions("Close");
            let scenes: ƒS.Scenes = [
                //{ scene: Scene, name: "Scene" }
            ];

            let uiElement: HTMLElement = document.querySelector("[type=interface]");
            dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

            // start the sequence
            ƒS.Progress.go(scenes);
        }
    }
}