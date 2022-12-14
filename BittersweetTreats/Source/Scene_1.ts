namespace Novel {
    export async function scene_1(): ƒS.SceneReturn {
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
                TX01: "...", //seufzen
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

        //ƒS.Speech.setTickerDelays(40, 500);
        //ƒS.Speech.hide();
        await ƒS.Location.show(locations.living_room);
        await ƒS.update(transition.stripes.duration, transition.stripes.alpha, transition.stripes.edge);
        await ƒS.Character.show(characters.celeste, characters.celeste.pose.neutral_new, ƒS.positionPercent(25, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.celeste_mum, text.celeste_mum.TX01);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX01);
        await ƒS.Speech.tell(characters.celeste_mum, text.celeste_mum.TX02);

    }
}