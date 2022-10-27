"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    Template.transition = {
        puzzle: {
            duration: 1,
            alpha: "FreeTransitions/Others/hearts.jpg",
            edge: 1 //Härtegrad
        }
    };
    Template.sound = {
        //SFX
        drop: "Audio/mixkit-retro-game-notification-212-wav" //Pfad kommt da rein
        //Audio Ordner noch kopieren
    };
    Template.locations = {
        // Backgrounds kopieren
        benchPlace: {
            // Hintergrund hat mehrere Ebenen
            name: "Park Day",
            background: "Background/bg_bench.png" // Pfad kommt hin
            // foreground: ""
        }
    };
    Template.characters = {
        narrator: {
        // name: ""  Anzeigename vom Narrator
        },
        protagonist: {
            name: ""
        },
        aisaka: {
            name: "Aisaka",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "Images/Characters/aisaka_angry.png",
                happy: "Images/Characters/aisaka_happy.png",
                upset: "Images/Characters/aisaka_upset.png"
            }
        },
        komi: {
            name: "Komi",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "Images/Characters/aisaka_angry.png",
                happy: "Images/Characters/aisaka_happy.png",
                upset: "Images/Characters/aisaka_upset.png"
            }
        }
    };
    Template.dataForSave = {
        nameProtagonist: ""
    };
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Template.Scene, name: "First Scene" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting"); //Name der Szene
        let text = {
            Komi: {
                T001: "Hallo",
                T002: "Alles gut soweit?",
                T003: "Anderer Text"
            }
        };
        Template.ƒS.Speech.hide(); //versteckt am Anfang die Textbox, wenn die Szene angezeigt wird
        await Template.ƒS.Location.show(Template.locations.benchPlace);
        await Template.ƒS.Character.show(Template.characters.komi, Template.characters.komi.pose.happy, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(); //Nach jeder Szene updaten
        await Template.ƒS.Speech.tell(Template.characters.komi, text.Komi.T001); //hier spricht der Charakter; bei text muss man nie updaten
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map