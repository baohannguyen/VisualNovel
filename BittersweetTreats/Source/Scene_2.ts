namespace Novel {
    export async function scene_2(): ƒS.SceneReturn {
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

        await ƒS.Location.show(locations.classroom);
        await ƒS.Character.show(characters.celeste, characters.celeste.pose.neutral_new, ƒS.positionPercent(25, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.lucia, text.lucia.TX01);
        
    }
}