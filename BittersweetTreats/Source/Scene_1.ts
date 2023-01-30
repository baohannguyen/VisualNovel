namespace Novel {
    export async function scene_1(): ƒS.SceneReturn {
        console.log("Scene 1");

        let text = {
            celeste: {
                TX01: "Alles gut bei dir Mama? Du siehst erschöpft aus.",
                TX02: "<i>Stimmt, letzten Monat hat sich Mama ihr Handgelenk gebrochen, weil sie hingefallen ist.</i>",
                TX03: "<i>Eigentlich soll sie weniger arbeiten und sich mehr ausruhen.</i>",
                TX04: "Kannst du nicht mal nachfragen, ob du in den nächsten Wochen weniger arbeiten kannst?",
                TX05: "So wie es aussieht, konnte deine Hand sich nicht komplett ausruhen.",
                TX06: "Nicht das es noch schlimmer wird.",
                TX07: "Dann lass mich nach einem Job suchen!",
                TX08: "Wenn ich einen Teilzeitjob habe, dann kommen wir noch gut über die Runden.",
                TX09: "Mach dir da keine Sorgen Mama.",
                TX10: "Wenn du jetzt weniger arbeitest, hast du mehr Zeit für Grace und kannst auf sie aufpassen.",
                TX11: "Sie wird sich bestimmt freuen, dich öfters im Haus zu sehen, um mit dir Zeit zu verbringen.",
                TX12: "Außerdem brauchst du wirklich eine Pause, sonst belastest du dich nur noch mehr damit.",
                TX13: "Ja werde ich machen."
            },
            celeste_mum: {
                TX01: "...", //seufzen
                TX02: "Hallo mein Schatz.",
                TX03: "Nicht wirklich, in letzter Zeit fällt es mir schwer meine Arbeit zu machen, weil ich Schmerzen in mein Handgelenk habe.",
                TX04: "Vor allem seit ich sie vor einem Monat gebrochen habe.",
                TX05: "Darüber habe ich mir auch schon Gedanken gemacht.",
                TX06: "Aber das wird finanziell schwierig für uns, wenn ich weniger arbeiten werde, weil sich mein Gehalt dadurch kürzen wird.",
                TX07: "Bist du dir sicher?",
                TX08: "Ich weiß, dass du neben der Schule noch zum Volleyball-Training gehst und auf Grace aufpasst, wann ich immer zur Arbeit gehe.",
                TX09: "Du sollst auch noch Zeit für dich und deine Freunde haben.",
                TX10: "Hmm da hast du recht, dann werde ich nächste Woche der Arbeit Bescheid geben.",
                TX11: "Aber falls es für dich zu viel wird, dann gib mir da Bescheid. Ok?",
                TX12: "Danke mein Schatz."

            }
        };

        //ƒS.Speech.setTickerDelays(40, 500);
        let signalDelay1: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(1)]);
        let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);
        // let signalDelay3: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(3)]); //verzögert die Zeit zwischen den Texten

        // ƒS.Sound.fade(music.main_theme, 0.5, 5, true);
        ƒS.Sound.play(music.main_theme, 0.5, true);
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.living_room);
        await ƒS.update(transition.stripes.duration, transition.stripes.alpha, transition.stripes.edge);
        await signalDelay1();
        ƒS.Sound.play(sounds.door_opening, 1);
        await signalDelay2();
        ƒS.Sound.play(sounds.sigh_female, 1);
        await signalDelay2();
        await ƒS.Character.show(characters.celeste, characters.celeste.pose.neutral_new, ƒS.positionPercent(30, 100));
        await ƒS.update(1);
        await signalDelay1();
        await ƒS.Speech.tell(characters.celeste_mum, text.celeste_mum.TX01);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX01);
        await ƒS.Character.animate(characters.celeste_mum, characters.celeste_mum.pose.sad, examAnimation());
        //await ƒS.Character.show(characters.celeste_mum, characters.celeste_mum.pose.sad, ƒS.positionPercent(70, 105));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.celeste_mum, text.celeste_mum.TX02);
        await ƒS.Speech.tell(characters.celeste_mum, text.celeste_mum.TX03);
        await ƒS.Speech.tell(characters.celeste_mum, text.celeste_mum.TX04);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX02);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX03);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX04);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX05);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX06);
        await ƒS.Speech.tell(characters.celeste_mum, text.celeste_mum.TX05);
        await ƒS.Speech.tell(characters.celeste_mum, text.celeste_mum.TX06);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX07);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX08);
        await ƒS.Speech.tell(characters.celeste_mum, text.celeste_mum.TX07);
        await ƒS.Speech.tell(characters.celeste_mum, text.celeste_mum.TX08);
        await ƒS.Speech.tell(characters.celeste_mum, text.celeste_mum.TX09);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX09);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX10);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX11);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX12);
        await ƒS.Speech.tell(characters.celeste_mum, text.celeste_mum.TX10);
        await ƒS.Speech.tell(characters.celeste_mum, text.celeste_mum.TX11);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX13);
        await ƒS.Speech.tell(characters.celeste_mum, text.celeste_mum.TX12);

        await ƒS.Character.hide(characters.celeste);
        await ƒS.Character.hide(characters.celeste_mum);
    }
}