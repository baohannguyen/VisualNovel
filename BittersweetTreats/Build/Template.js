"use strict";
var Novel;
(function (Novel) {
    Novel.ƒ = FudgeCore;
    Novel.ƒS = FudgeStory;
    console.log("Bittersweet Treats starting");
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
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function scene_1() {
        console.log("Conversation in the living room");
        let text = {
            celeste: {
                TX01: "Alles gut bei dir Mama? Du siehst erschöpft aus.",
                TX02: "<i>Stimmt, letzten Monat hat sich Mama ihr Handgelenk gebrochen, weil sie hingefallen ist. Eigentlich soll sie weniger arbeiten und sich mehr ausruhen.</i>",
                Tx03: "Kannst du nicht mal nachfragen, ob du in den nächsten Wochen weniger arbeiten kannst?",
                TX04: "So wie es aussieht, konnte deine Hand sich nicht komplett ausruhen. Nicht das es noch schlimmer wird.",
                TX05: "Dann lass mich nach einem Job suchen!",
                TX06: "Wenn ich einen Teilzeitjob habe, dann kommen wir noch gut über die Runden.",
                TX07: "Mach dir da keine Sorgen Mama.",
                TX08: "Wenn du jetzt weniger arbeitest, hast du ja mehr Zeit für Grace und kannst auf sie aufpassen. Sie wird sich bestimmt freuen, dich öfters im Haus zu sehen.",
                TX09: "Außerdem brauchst du wirklich eine Pause, sonst belastest du dich nur noch mehr damit.",
                TX10: "Ja werde ich machen."
            },
            celeste_mum: {
                TX01: "...",
                TX02: "Hallo mein Schatz.",
                TX03: "Nicht wirklich, in letzter Zeit fällt es mir schwer meine Arbeit zu machen, weil ich Schmerzen in mein Handgelenk habe.",
                TX04: "Vor allem seit ich sie vor einem Monat gebrochen habe.",
                TX05: "Darüber habe ich mir auch schon Gedanken gemacht, aber das wird finanziell schwierig für uns, wenn ich weniger arbeiten werde, weil sich mein Gehalt dadurch kürzen wird.",
                TX06: "Bist du dir sicher?",
                TX07: "Ich weiß, dass du neben der Schule noch zum Volleyball-Training gehst und auf Grace aufpasst, wann ich immer zur Arbeit gehe.",
                TX08: "Du sollst auch noch Zeit für dich und deine Freunde haben.",
                TX09: "Hm da hast du recht, dann werde ich nächste Woche der Arbeit Bescheid geben.",
                TX10: "Aber falls es für dich zu viel wird, dann gib mir da Bescheid. Ok?",
                TX11: "Danke mein Schatz."
            }
        };
        //ƒS.Speech.hide();
        await Novel.ƒS.Location.show(Novel.locations.living_room);
        await Novel.ƒS.Character.show(Novel.characters.celeste, Novel.characters.celeste.pose.neutral, Novel.ƒS.positionPercent(30, 90));
        await Novel.ƒS.update();
        await Novel.ƒS.Speech.tell(Novel.characters.celeste_mum, text.celeste_mum.TX01);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX01);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste_mum, text.celeste_mum.TX02);
    }
    Novel.scene_1 = scene_1;
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function scene_2() {
        console.log("Talk at school");
        let text = {
            celeste: {
                TX01: "...",
                TX02: "Oh sorry ich hab grad nicht aufgepasst. Worüber habt ihr nochmal geredet?",
                TX03: "Ich mache mir grad ständig Gedanken um meine Mum, seitdem sie mir ihre Situation erzählt hat.",
                TX04: "Ihr geht es körperlich nicht so gut, weil sie zurzeit sehr viel arbeitet, deswegen hab ich ihr vorgeschlagen, dass ich mir einen Teilzeitjob suchen werde.",
                TX05: "Aber ich finde grade keine guten Stellen.",
                TX06: "Meinst du das Café bei dir in der Nähe?",
                TX07: "Oh davon hab ich gar nicht gewusst. Dann werde ich mich direkt dort bewerben.",
                TX08: "Danke Lucia, du hast immer eine Lösung zu meinen Problemen."
            },
            lucia: {}
        };
    }
    Novel.scene_2 = scene_2;
})(Novel || (Novel = {}));
//# sourceMappingURL=Template.js.map