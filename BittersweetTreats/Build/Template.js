"use strict";
var Novel;
(function (Novel) {
    Novel.ƒ = FudgeCore;
    Novel.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    Novel.transition = {};
    Novel.sounds = {};
    Novel.music = {};
    Novel.locations = {
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
        }
    };
    Novel.characters = {
        narrator: {},
        celeste: {
            name: "Celeste",
            origin: Novel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/celeste_smiling_transparent.png"
            }
        },
        celeste_mum: {
            name: "Mutter",
            origin: Novel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {}
        },
        lucia: {
            name: "Lucia",
            origin: Novel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {}
        },
        sophia: {
            name: "Sophia"
        },
        evan: {
            name: "Evan",
            origin: Novel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {}
        },
        customer: {
            name: "Kunde"
        }
    };
    Novel.items = {};
    Novel.dataForSave = {};
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
    let gameMenu;
    // true = Menü ist offen 
    let menuIsOpen = true;
    async function buttonFunctions(_option) {
        console.log(_option);
        switch (_option) {
            case menuButtons.save:
                await Novel.ƒS.Progress.save();
                break;
            case menuButtons.load:
                await Novel.ƒS.Progress.load();
            case menuButtons.close:
                gameMenu.close();
                menuIsOpen = false; //false = Menü ist zu
                break;
        }
    }
    // Menü shortcuts
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case Novel.ƒ.KEYBOARD_CODE.F:
                console.log("Save");
                await Novel.ƒS.Progress.save();
                break;
            case Novel.ƒ.KEYBOARD_CODE.G:
                console.log("Load");
                await Novel.ƒS.Progress.load();
                break;
            case Novel.ƒ.KEYBOARD_CODE.M:
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
        function start(_event) {
            gameMenu = Novel.ƒS.Menu.create(menuButtons, buttonFunctions, "menuButtonsCSS");
            buttonFunctions("Close");
            let scenes = [
                { scene: Novel.scene_1, name: "Conversation in the living room" }
            ];
            let uiElement = document.querySelector("[type=interface]");
            Novel.dataForSave = Novel.ƒS.Progress.setData(Novel.dataForSave, uiElement);
            // start the sequence
            Novel.ƒS.Progress.go(scenes);
        }
    }
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function scene_1() {
        console.log("Conversation in the living room");
        let text;
        await Novel.ƒS.Location.show(Novel.locations.living_room);
        await Novel.ƒS.Character.show(Novel.characters.celeste, Novel.characters.celeste.pose.neutral, Novel.ƒS.positionPercent(30, 70));
        await Novel.ƒS.update();
        await Novel.ƒS.Speech.tell(Novel.characters.celeste_mum, text.celeste_mum.TX01);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX01);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste_mum, text.celeste_mum.TX02);
    }
    Novel.scene_1 = scene_1;
})(Novel || (Novel = {}));
//# sourceMappingURL=Template.js.map