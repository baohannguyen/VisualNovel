"use strict";
var Novel;
(function (Novel) {
    Novel.ƒ = FudgeCore;
    Novel.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    Novel.transition = {
        puzzle: {
            duration: 1,
            alpha: "FreeTransitions/Others/hearts.jpg",
            edge: 1 //Härtegrad
        }
    };
    Novel.sound = {
        //SFX
        drop: "Audio/mixkit-retro-game-notification-212-wav" //Pfad kommt da rein
        //Audio Ordner noch kopieren
    };
    Novel.locations = {
        // Backgrounds kopieren
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
    Novel.dataForSave = {
        nameProtagonist: ""
    };
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Novel.firstScene, name: "Park Scene" },
            { scene: Novel.secondScene, name: "Sunset Scene" }
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
        await Novel.ƒS.Location.show(Novel.locations.park);
        await Novel.ƒS.Character.show(Novel.characters.komi, Novel.characters.komi.pose.happy, Novel.ƒS.positionPercent(50, 105));
        await Novel.ƒS.update(); //Nach jeder Szene updaten
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
        await Novel.ƒS.Character.show(Novel.characters.komi, Novel.characters.komi.pose.happy, Novel.ƒS.positionPercent(50, 105));
        await Novel.ƒS.update();
        await Novel.ƒS.Speech.tell(Novel.characters.komi, text.Komi.TX01);
        await Novel.ƒS.Speech.tell(Novel.characters.komi, text.Komi.TX02);
    }
    Novel.secondScene = secondScene;
})(Novel || (Novel = {}));
//# sourceMappingURL=Template.js.map