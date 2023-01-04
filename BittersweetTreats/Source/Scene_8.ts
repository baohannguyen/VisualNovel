namespace Novel {
    export async function scene_8(): ƒS.SceneReturn {
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

        await ƒS.Speech.tell(characters.celeste, text.celeste.TX01);

        await ƒS.Text.print("Du hast das Bad Ending erreicht");
        
    }
}