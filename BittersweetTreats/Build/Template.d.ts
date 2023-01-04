declare namespace Novel {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {};
    let sounds: {};
    let music: {};
    let locations: {
        classroom: {
            name: string;
            background: string;
        };
        cafe: {
            name: string;
            background: string;
        };
        living_room: {
            name: string;
            background: string;
        };
        park: {
            name: string;
            background: string;
        };
        street: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {};
        celeste: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
            };
        };
        celeste_mum: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {};
        };
        lucia: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {};
        };
        sophia: {
            name: string;
        };
        evan: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {};
        };
        customer: {
            name: string;
        };
    };
    let items: {};
    let dataForSave: {};
}
declare namespace Novel {
    function scene_1(): ƒS.SceneReturn;
}
declare namespace Novel {
    function scene_2(): ƒS.SceneReturn;
}
