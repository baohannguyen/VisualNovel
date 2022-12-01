declare namespace Novel {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        hearts: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        loungeTheme: string;
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
    let items: {
        item1: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
    };
    let dataForSave: {
        nameProtagonist: string;
        interrupt: boolean;
        characterPoints: number;
    };
    function examAnimation(): ƒS.AnimationDefinition;
    function getAnimation(): ƒS.AnimationDefinition;
}
declare namespace Novel {
    function firstScene(): ƒS.SceneReturn;
}
declare namespace Novel {
}
declare namespace Novel {
    function secondScene(): ƒS.SceneReturn;
}
declare namespace Novel {
    function thirdScene(): ƒS.SceneReturn;
}
