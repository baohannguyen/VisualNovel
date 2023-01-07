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
                neutral_new: string;
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
        sophie: {
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
declare namespace Novel {
    function scene_3(): ƒS.SceneReturn;
}
declare namespace Novel {
    function scene_4(): ƒS.SceneReturn;
}
declare namespace Novel {
    function scene_6(): ƒS.SceneReturn;
}
declare namespace Novel {
    function scene_7(): ƒS.SceneReturn;
}
declare namespace Novel {
    function scene_8(): ƒS.SceneReturn;
}
