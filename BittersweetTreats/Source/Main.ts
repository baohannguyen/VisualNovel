namespace Novel {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;

    console.log("Bittersweet Treats starting");

    export let transition = {
        stripes: {
            duration: 1,
            alpha: "Transitions/005.jpg",
            edge: 0.2
        },
        boxes: {
            duration: 1,
            alpha: "Transitions/24.png",
            edge: 0.2
        }

    };

    export let sounds = {
        chuckle_female: "Audio/Sound/chuckle_female.mp3",
        door_closing: "Audio/Sound/door_closing.mp3",
        door_opening: "Audio/Sound/door_opening.mp3",
        cafe_door: "Audio/Sound/cafe_door_opening.mp3",
        gasping: "Audio/Sound/gasping_audio.mp3",
        hmm: "Audio/Sound/hmm_audio.mp3",
        oh: "Audio/Sound/oh_disappointed_female.mp3",
        rain: "Audio/Sound/rain.mp3",
        sigh_male: "Audio/Sound/sigh_male.mp3",
        sigh_female: "Audio/Sound/sigh_female.mp3",
        spoon_stir: "Audio/Sound/spoon_stir_audio.mp3"
    };

    export let music = {
        main_theme: "Audio/Themes/Spring-Flowers.mp3",
        cafe_theme: "Audio/Themes/romantic.mp3"

    };

    export let locations = {
        classroom: {
            name: "Classroom",
            background: "Background/classroom.png"
        },
        cafe: {
            name: "Café",
            background: "Background/cafe.jpg"
        },
        living_room: {
            name: "Living Room",
            background: "Background/livingroom.png"
        },
        park: {
            name: "Park",
            background: "Background/park_evening.png"
        },
        street: {
            name: "Street Rain",
            background: "Background/street_rain.png"
        },
        office: {
            name: "Office",
            background: "Background/office.png"
        },
        blackScreen: {
            name: "Narrator Talk",
            background: "Background/black_screen.png"
        }


    };

    export let characters = {
        narrator: {

        },
        celeste: {
            name: "Celeste",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                // neutral: "Images/celeste_smiling_transparent.png"
                neutral_new: "Images/2.png",
                school: "Images/1.png"

            }

        },
        celeste_mum: {
            name: "Mutter",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                sad: "Images/mum.png"

            }

        },
        lucia: {
            name: "Lucia",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/10.png"

            }

        },
        sophie: {
            name: "Sophie"

        },
        evan: {
            name: "Evan",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {

            }

        },
        customer: {
            name: "Kunde"

        }


    };

    export let items = {

    };

    export let dataForSave = {
        celesteScore: 0, //Scores werden hier gespeichert
        pickedMeterScene: false

    };

    // export function addAnimation(): ƒS.AnimationDefinition {
    //     return {
    //         start: { translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("white", 0.3) },
    //         end: { translation: ƒS.positions.bottomright, rotation: 20, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("red") },
    //         duration: 1,
    //         playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    //     };
    // }

    export function examAnimation(): ƒS.AnimationDefinition {
        return {
            start: { translation: ƒS.positionPercent(120, 100) },
            end: { translation: ƒS.positionPercent(70, 100)}, //Figur verschwindete, weil Transparenz = 0 ist 
            duration: 3,
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }

    // Menü
    let menuButtons = {
        save: "Save",
        load: "Load",
        credits: "Credits",
        drinkList: "Getränkeliste",
        ingredientList: "Zutatenliste"
    };

    let gameMenu: ƒS.Menu;

    // true = Menü ist offen 
    let menuIsOpen: boolean = true;

    export function seeCredits(): void {
      ƒS.Text.print("Bilder:....");  
    }

    export function seeDrinkList(): void {
        ƒS.Text.print("Schokotraum: Kakaopulver, Milch und Schlagsahne" + 
        "<p>Schlafenszeit: Kaffeepulver, Milch und Zucker</p>" +
        "<p>Matcha Latte: Matchapulver, Milch und Zucker</p>"
        
        
        );
    }

    export function seeIngredientList(): void {
        ƒS.Text.print("Kakaopulver" +
        "<p>Kaffeepulver</p>" +
        "<p>Matchapulver</p>" +
        "<p>Milch</p>" +
        "<p>Schlagsahne</p>" +
        "<p>Zucker</p>"
        
        );
    }




    async function buttonFunctions(_option: string): Promise<void> {
        console.log(_option);
        switch (_option) {
            case menuButtons.save:
                await ƒS.Progress.save();
                break;
            case menuButtons.load:
                await ƒS.Progress.load();
                break;
            case menuButtons.credits:
                seeCredits();
                break;
            case menuButtons.drinkList:
                seeDrinkList();
                break;
            case menuButtons.ingredientList:
                seeIngredientList();
                break;

            // case menuButtons.close:
            //     gameMenu.close();
            //     menuIsOpen = false; //false = Menü ist zu
            //     break;
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
        gameMenu = ƒS.Menu.create(menuButtons, buttonFunctions, "menuButtonsCSS");
        buttonFunctions("Close");
        let scenes: ƒS.Scenes = [
            // { scene: scene_1, name: "Conversation in the living room" },
            // { scene: scene_2, name: "School" }
            // { scene: scene_3, name: "Narrator" },
            // { scene: scene_4, name: "Talk with Evan" }
            { scene: scene_5, name: "Mixing Drinks" }
            // { scene: scene_6, name: "Good Ending" },
            // { scene: scene_7, name: "Normal Ending" },
            // { scene: scene_8, name: "Bad Ending" }
        ];


        let uiElement: HTMLElement = document.querySelector("[type=interface]");
        dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

        // start the sequence
        ƒS.Progress.go(scenes);
    }

}
