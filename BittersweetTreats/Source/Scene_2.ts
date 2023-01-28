namespace Novel {
    export async function scene_2(): ƒS.SceneReturn {
        console.log("Scene 2");

        let text = {
            celeste: {
                TX01: "...",
                TX02: "Oh sorry ich hab grad nicht aufgepasst.",
                TX03: "Worüber habt ihr nochmal geredet?",
                TX04: "Ich mache mir grad ständig Gedanken um meine Mum, seitdem sie mir ihre Situation erzählt hat.",
                TX05: "Ihr geht es körperlich gerade nicht so gut, weil sie zurzeit sehr viel arbeitet, deswegen hab ich ihr vorgeschlagen, dass ich mir einen Teilzeitjob suchen werde.",
                TX06: "Aber ich finde grade keine guten Stellen.",
                TX07: "Meinst du das Café bei dir in der Nähe?",
                TX08: "Oh davon hab ich gar nicht gewusst.",
                TX09: "Dann werde ich mich direkt dort bewerben.",
                TX10: "Danke Lucia, du hast immer eine Lösung zu meinen Problemen."
            },
            lucia: {
                TX01: "Das hört sich echt cool an.",
                TX02: "Hättet ihr Lust da mal vorbeizuschauen?",
                TX03: "Wie sieht es bei dir aus Cel?",
                TX04: "Cel?",
                TX05: "Sophie hat einen Laden entdeckt mit vielen schönen Dekorationen und ich hab gefragt, ob wir alle mal hingehen wollen.",
                TX06: "Aber ist eigentlich alles gut bei dir? Du bist in den letzten Tagen abwesend.",
                TX07: "Worum ging es?",
                TX08: "Hmm kennst du das Café <i>Lovely Java</i>?",
                TX09: "Genau, ich hab gehört, dass sie zurzeit nach Aushilfen suchen.",
                TX10: "Das wäre eine gute Möglichkeit für dich, vor allem weil das Gehalt dort sehr gut sein soll und der Laden beliebt ist.",
                TX11: "Hab ich doch gern gemacht."
            },
            sophie: {
                TX01: "... da gibt es viele coole Sachen für dein Zimmer.",
                TX02: "Ja klar."
            }
        };

        let signalDelay1: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(1)]);
        let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);

        ƒS.Sound.play(music.main_theme, 0.5, true);
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.classroom);
        await ƒS.update(transition.stripes.duration, transition.stripes.alpha, transition.stripes.edge);
        await signalDelay2();
        await ƒS.Character.show(characters.celeste, characters.celeste.pose.neutral_new, ƒS.positionPercent(25, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.sophie, text.sophie.TX01);
        await ƒS.Speech.tell(characters.lucia, text.lucia.TX01);
        await ƒS.Speech.tell(characters.lucia, text.lucia.TX02);
        await ƒS.Speech.tell(characters.sophie, text.sophie.TX02);
        await ƒS.Speech.tell(characters.lucia, text.lucia.TX03);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX01);
        await ƒS.Speech.tell(characters.lucia, text.lucia.TX04);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX02);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX03);
        await ƒS.Speech.tell(characters.lucia, text.lucia.TX05);
        await ƒS.Speech.tell(characters.lucia, text.lucia.TX06);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX04);
        await ƒS.Speech.tell(characters.lucia, text.lucia.TX07);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX05);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX06);
        await ƒS.Speech.tell(characters.lucia, text.lucia.TX08);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX07);
        await ƒS.Speech.tell(characters.lucia, text.lucia.TX09);
        await ƒS.Speech.tell(characters.lucia, text.lucia.TX10);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX08);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX09);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX10);
        await ƒS.Speech.tell(characters.lucia, text.lucia.TX11);

    }
}