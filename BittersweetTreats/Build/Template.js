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
                // neutral: "Images/celeste_smiling_transparent.png"
                neutral_new: "Images/2.png"
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
        sophie: {
            name: "Sophie"
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
        console.log("Scene 1");
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
        await Novel.ƒS.Character.show(Novel.characters.celeste, Novel.characters.celeste.pose.neutral_new, Novel.ƒS.positionPercent(25, 100));
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
        console.log("Scene 2");
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
            lucia: {
                TX01: "Das hört sich echt cool an. Hättet ihr Lust da mal vorbeizuschauen?",
                TX02: "Wie sieht es bei dir aus Cel?",
                TX03: "Cel?",
                TX04: "Sophie hat einen Laden entdeckt mit vielen schönen Dekorationen und ich hab gefragt, ob wir alle mal hingehen wollen.",
                TX05: "Aber ist eigentlich alles gut bei dir? Du bist in den letzten Tagen abwesend.",
                TX06: "Worum ging es?",
                TX07: "Hmm kennst du das Café 'Lovely Java'?",
                TX08: "Genau, ich hab gehört, dass sie zurzeit nach Aushilfen suchen.",
                TX09: "Das wäre eine gute Möglichkeit für dich, vor allem weil das Gehalt dort sehr gut sein soll und der Laden beliebt ist.",
                TX10: "Hab ich doch gern gemacht."
            },
            sophie: {
                TX01: "... da gibt es viele coole Sachen für dein Zimmer.",
                TX02: "Ja klar."
            }
        };
        await Novel.ƒS.Location.show(Novel.locations.classroom);
        await Novel.ƒS.Speech.tell(Novel.characters.lucia, text.lucia.TX01);
    }
    Novel.scene_2 = scene_2;
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function scene_3() {
        console.log("Scene 3");
        let text = {
            narrator: {
                TX01: "Innerhalb einer Woche hat sich Celeste für die Stelle beworben. Nach ein paar Tagen hat sie eine Antwort bekommen und muss, um die Stelle zu kriegen Probearbeiten."
            }
        };
    }
    Novel.scene_3 = scene_3;
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function scene_4() {
        console.log("Scene 4");
        let text = {
            celeste: {
                TX01: "<i>Wow das Café sieht richtig schön aus. Hier ist auch eine Menge los.</i>",
                TX02: "<i>Ich muss den Chef Evan finden. Er hat gemeint, dass wir uns am Tresen treffen werden.</i>",
                TX03: "Entschuldigung, ich suche gerade nach ihrem Chef Evan. Wir haben einen Termin vereinbart.",
                TX04: "Ja genau, es freut mich auch Sie kennenzulernen.",
                TX05: "<i>Ich muss also für die Kunden Getränke mischen, damit ich die Stelle bekomme. Das werde ich auf jeden Fall hinkriegen.</i>",
                TX06: "Ja ich habe alles verstanden. Wir können direkt loslegen."
            },
            evan: {
                TX01: "Ah Hallo du bist Celeste richtig?",
                TX02: "Schön dich kennenzulernen, ich bin Evan. Wir haben bis jetzt wegen deiner Bewerbung nur telefoniert.",
                TX03: "Du kannst mich gerne duzen.",
                TX04: "Nun zu deiner Bewerbung.",
                TX05: "Ich fand sie vielversprechend und glaube, dass du gut zu uns passen würdest, aber ich hab dich erstmal zum Probearbeiten eingeladen, weil ich sehen möchte wie du mit den Aufgaben zurechtkommst.",
                TX06: "'Lovely Java' ist bekannt für seine verschiedene Getränke und Kaffees, die wir für unsere Kunden mischen.",
                TX07: "Aus dem Grund wirst du heute ein paar Getränke mischen.",
                TX08: "Du kriegst eine Liste, wo drauf steht aus welchen Zutaten, die einzelnen Getränken und Kaffees bestehen. Die Liste kannst du jederzeit anschauen, falls du nicht weiterweißt.",
                TX09: "Hast du bist jetzt alles verstanden?",
                TX10: "Das höre ich doch gerne."
            }
        };
        await Novel.ƒS.Location.show(Novel.locations.cafe);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX01);
    }
    Novel.scene_4 = scene_4;
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function scene_6() {
        console.log("Good Ending");
        let text = {
            celeste: {
                TX01: "Das freut mich zu hören. Es hat auch Spaß gemacht.",
                TX02: "Aber was heißt das jetzt?",
                TX03: "Danke, dass ich den Job kriege. Sie werden es nicht bereuen mich eingestellt zu haben.",
                TX04: "Mamaa!",
                TX05: "Ich hab die Stelle bei 'Lovely Java' bekommen.",
                TX06: "Ich bin so froh, dass ich den Job habe, jetzt muss du dir nicht mehr so viele Sorgen machen."
            },
            evan: {
                TX01: "Du hast wirklich gute Arbeit geleistet, Celeste. Die Getränke hast du alle richtig gemischt und die Kunden waren alle zufrieden damit.",
                TX02: "Das heißt, dass du natürlich von uns eingestellt wirst und du die Stelle kriegst.",
                TX03: "Also über deine heutige Leistung kann ich mich nicht beschweren.",
                TX04: "Auf eine gute Zusammenarbeit, Celeste."
            },
            celeste_mum: {
                TX01: "Das hat mich richtig erschreckt. Was ist passiert?",
                TX02: "Oh da, wofür du dich letzte Woche beworben hast?",
                TX03: "Das freut mich, mein Schatz. Ich bin richtig stolz auf dich."
            }
        };
        await Novel.ƒS.Location.show(Novel.locations.cafe);
        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX01);
        await Novel.ƒS.Text.print("Du hast das Good Ending erreicht.");
    }
    Novel.scene_6 = scene_6;
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function scene_7() {
        console.log("Normal Ending");
        let text = {
            celeste: {
                TX01: "<i>Ich kann gar nicht einschätzen, ob ich den Job jetzt kriege oder nicht.</i>",
                TX02: "<i>An Evans Gesichtsausdruck kann ich es auch nicht wirklich ablesen.</i>",
                TX03: "Und wie fandest du bis jetzt meine Arbeit?",
                TX04: "Das Mischen war doch schwieriger als ich dachte.",
                TX05: "Wirklich?",
                TX06: "Danke, dass ich die Stelle bekommen habe.",
                TX07: "Ich werde mich verbessern, das wäre ich dir versprechen."
            },
            evan: {
                TX01: "Ich fand, dadurch dass du es zum ersten Mal gemacht hast, war deine Leistung durchschnittlich.",
                TX02: "Es sind dir dennoch ein paar Fehler passiert.",
                TX03: "Ich würde dich trotzdem einstellen, weil ich Potenzial in dir sehe und glaube, dass du besser wirst, je öfter du das machst.",
                TX04: "Aber bei deinen nächsten Schichten, werde ich trotzdem da sein und es bei dir kontrollieren, damit dir nicht mehr so oft Fehler vorkommen"
            }
        };
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX01);
        await Novel.ƒS.Text.print("Du hast das Normal Ending erreicht");
    }
    Novel.scene_7 = scene_7;
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function scene_8() {
        console.log("Bad Ending");
        let text = {
            celeste: {
                TX01: "...",
                TX02: "Ja das ist verständlich, dann werde ich mich auf die Suche nach anderen Stellen begeben.",
                TX03: "Der Job wäre super gewesen, hätte ich ihn bekommen. Jetzt muss ich mich wieder auf der Suche nach neuen Stellenangeboten begeben.",
                TX04: "Ich weiß nicht, ob ich das Mama erzählen soll, dann würde sie sich noch mehr Sorgen machen.",
                TX05: "Und Lucia hätte sich auch gefreut, wenn ich den Job bekommen hätte, den sie mir vorgeschlagen hat.",
                TX06: "Wie konnte ich das nur vermasseln?"
            },
            evan: {
                TX01: "Es tut mir leid, Celeste. Aber das war grade gar nicht gut.",
                TX02: "Du hast die Getränke falsch gemischt, dann war der Kunde noch so lieb und hat dir noch eine zweite Chance gegeben.",
                TX03: "Das kann ich nicht so akzeptieren, die Stelle kann ich dir daher nicht vergeben.",
                TX04: "Mach das. Ich wünsche dir trotzdem viel Glück für deinen nächsten Job."
            }
        };
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX01);
        await Novel.ƒS.Text.print("Du hast das Bad Ending erreicht");
    }
    Novel.scene_8 = scene_8;
})(Novel || (Novel = {}));
//# sourceMappingURL=Template.js.map