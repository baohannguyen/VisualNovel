declare namespace Novel {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        puzzle: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        drop: string;
    };
    let locations: {
        park: {
            name: string;
            background: string;
        };
        sunset: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {};
        protagonist: {
            name: string;
        };
        aisaka: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
        komi: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
    };
    let dataForSave: {
        nameProtagonist: string;
    };
}
declare namespace Novel {
    function firstScene(): ƒS.SceneReturn;
}
declare namespace Novel {
    function secondScene(): ƒS.SceneReturn;
}
