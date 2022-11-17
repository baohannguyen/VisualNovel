"use strict";
var Novel;
(function (Novel) {
    Novel.ƒ = FudgeCore;
    Novel.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    Novel.transition = {
        hearts: {
            duration: 1,
            alpha: "FreeTransitions/Others/hearts.jpg",
            edge: 0.2 //Härtegrad
        }
    };
    Novel.sound = {
        //Theme
        loungeTheme: "Audio/Themes/thelounge.mp3" //« Music by: Bensound.com/royalty-free-music »
    };
    Novel.locations = {
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
    Novel.characters = {
        narrator: {
        // name: ""  Anzeigename vom Narrator
        },
        protagonist: {
            name: ""
        },
        aisaka: {
            name: "Aisaka",
            origin: Novel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "Images/Characters/aisaka_angry.png",
                happy: "Images/Characters/aisaka_happy.png",
                upset: "Images/Characters/aisaka_upset.png"
            }
        },
        komi: {
            name: "Komi",
            origin: Novel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "Images/Characters/aisaka_angry.png",
                happy: "Images/Characters/aisaka_happy.png",
                upset: "Images/Characters/aisaka_upset.png"
            }
        }
    };
    // alles was wir speichern wollen, wenn man auf den Button "Speichern" klickt, sollen auch gespeichert werden
    Novel.dataForSave = {
        nameProtagonist: ""
    };
    function examAnimation() {
        return {
            start: {
                translation: Novel.ƒS.positions.bottomcenter, color: Novel.ƒS.Color.CSS("blue", 1)
            },
            end: {
                translation: Novel.ƒS.positions.bottomleft, color: Novel.ƒS.Color.CSS("red", 0) //Figur verschwindete, weil Transparenz = 0 ist
            },
            duration: 3,
            playmode: Novel.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Novel.examAnimation = examAnimation;
    function getAnimation() {
        return {
            start: { translation: Novel.ƒS.positions.bottomleft, rotation: -20, scaling: new Novel.ƒS.Position(0.5, 1.5), color: Novel.ƒS.Color.CSS("white", 0.3) },
            end: { translation: Novel.ƒS.positions.bottomright, rotation: 20, scaling: new Novel.ƒS.Position(1.5, 0.5), color: Novel.ƒS.Color.CSS("red") },
            duration: 1,
            playmode: Novel.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Novel.getAnimation = getAnimation;
    //Menu
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        close: "Close"
    };
    let gameMenu;
    // true = Menü ist offen 
    let menuIsOpen = true;
    async function buttonFunctions(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await Novel.ƒS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await Novel.ƒS.Progress.load();
            case inGameMenuButtons.close:
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
        gameMenu = Novel.ƒS.Menu.create(inGameMenuButtons, buttonFunctions, "gameMenuCSS"); //eigene CSS Klasse für das Menü
        buttonFunctions("Close");
        let scenes = [
            // { scene: firstScene, name: "Park Scene" },
            // { scene: secondScene, name: "Sunset Scene" },
            { scene: Novel.thirdScene, name: "Animation Scene" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Novel.dataForSave = Novel.ƒS.Progress.setData(Novel.dataForSave, uiElement);
        // start the sequence
        Novel.ƒS.Progress.go(scenes);
    }
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function firstScene() {
        console.log("First Scene"); //Name der Szene
        let text = {
            Komi: {
                TX01: "Hallo",
                TX02: "Alles gut soweit?",
                TX03: "Mein Name ist Komi."
            }
        };
        Novel.ƒS.Speech.hide(); //versteckt am Anfang die Textbox, wenn die Szene angezeigt wird
        // ƒS.Sound.play(sound.loungeTheme, 0.4, false);
        await Novel.ƒS.Location.show(Novel.locations.park);
        await Novel.ƒS.Character.show(Novel.characters.komi, Novel.characters.komi.pose.happy, Novel.ƒS.positionPercent(50, 105));
        await Novel.ƒS.update(); //Nach jeder Szene updaten
        //wenn man ne Zahl in die Klammer eingibt, dann zeigt es die Fade-Transition an
        await Novel.ƒS.Speech.tell(Novel.characters.komi, text.Komi.TX01); //hier spricht der Charakter; bei text muss man nie updaten
        await Novel.ƒS.Speech.tell(Novel.characters.komi, text.Komi.TX02);
        await Novel.ƒS.Speech.tell(Novel.characters.komi, text.Komi.TX03);
    }
    Novel.firstScene = firstScene;
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function secondScene() {
        console.log("Second Scene");
        let text = {
            Komi: {
                TX01: "Danke fürs Begleiten.",
                TX02: "Der Ort ist sehr schön."
            }
        };
        Novel.ƒS.Speech.hide();
        await Novel.ƒS.Location.show(Novel.locations.sunset);
        await Novel.ƒS.update(Novel.transition.hearts.duration, Novel.transition.hearts.alpha, Novel.transition.hearts.edge);
        await Novel.ƒS.Character.show(Novel.characters.komi, Novel.characters.komi.pose.happy, Novel.ƒS.positionPercent(50, 105));
        await Novel.ƒS.update();
        await Novel.ƒS.Speech.tell(Novel.characters.komi, text.Komi.TX01);
        await Novel.ƒS.Speech.tell(Novel.characters.komi, text.Komi.TX02);
        await Novel.ƒS.Character.hide(Novel.characters.komi);
        await Novel.ƒS.update();
        //Entscheidungsmöglichkeiten
        let choicesSunset = {
            sayYes: "Ja",
            sayOk: "Ok",
            sayNo: "Nicht wirklich"
        };
        // let choicesNewSunset = {
        //     beach: "Wir können zum Strand gehen",
        //     mall: "Lass uns shoppen gehen"
        // };
        let dialogueElement = await Novel.ƒS.Menu.getInput(choicesSunset, "choicesCSSClass");
        // let dialogueElement1 = await ƒS.Menu.getInput(choicesNewSunset, "choicesCSSClass");
        // do-while Schleife ist auch eine Möglichkeit
        switch (dialogueElement) {
            case choicesSunset.sayYes:
                console.log("test");
                await Novel.ƒS.Character.show(Novel.characters.komi, Novel.characters.komi.pose.happy, Novel.ƒS.positionPercent(50, 105));
                await Novel.ƒS.update();
                await Novel.ƒS.Speech.tell(Novel.characters.komi, "Das freut mich zu hören.");
                break;
            case choicesSunset.sayOk:
                console.log("test");
                await Novel.ƒS.Character.show(Novel.characters.komi, Novel.characters.komi.pose.happy, Novel.ƒS.positionPercent(50, 105));
                await Novel.ƒS.update();
                await Novel.ƒS.Speech.tell(Novel.characters.komi, "Ok");
                break;
            case choicesSunset.sayNo:
                console.log("test");
                await Novel.ƒS.Character.show(Novel.characters.komi, Novel.characters.komi.pose.upset, Novel.ƒS.positionPercent(50, 105));
                await Novel.ƒS.update();
                await Novel.ƒS.Speech.tell(Novel.characters.komi, "Oh, sollen wir dann woanders hingehen?");
                break;
        }
        // switch (dialogueElement1) {
        //     case choicesNewSunset.beach:
        //         console.log("beach");
        //         await ƒS.Character.show(characters.komi, characters.komi.pose.happy, ƒS.positionPercent(50, 105));
        //         await ƒS.update();
        //         await ƒS.Speech.tell(characters.komi, "Super, ich wollte schon immer den Strand besuchen.");
        //         break;
        //     case choicesNewSunset.mall:
        //         console.log("mall");
        //         await ƒS.Character.show(characters.komi, characters.komi.pose.happy, ƒS.positionPercent(50, 105));
        //         await ƒS.update();
        //         await ƒS.Speech.tell(characters.komi, "Super, ich wollte schon immer mit dir shoppen gehen.");
        //         break;
        // }
    }
    Novel.secondScene = secondScene;
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function thirdScene() {
        console.log("Third Scene");
        //Animation-Beispiiel
        Novel.ƒS.Speech.hide();
        await Novel.ƒS.Character.show(Novel.characters.komi, Novel.characters.komi.pose.happy, Novel.ƒS.positionPercent(50, 105));
        await Novel.ƒS.Location.show(Novel.locations.sunset);
        Novel.ƒS.update();
        // await ƒS.Character.animate(characters.komi, characters.komi.pose.happy, examAnimation());
        await Novel.ƒS.Character.animate(Novel.characters.komi, Novel.characters.komi.pose.happy, Novel.getAnimation());
    }
    Novel.thirdScene = thirdScene;
})(Novel || (Novel = {}));
//# sourceMappingURL=Template.js.map