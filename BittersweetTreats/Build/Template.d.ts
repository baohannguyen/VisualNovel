declare namespace Novel {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        stripes: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sounds: {
        chuckle_female: string;
        door_closing: string;
        door_opening: string;
        cafe_door: string;
        gasping: string;
        hmm: string;
        oh: string;
        rain: string;
        sigh_male: string;
        sigh_female: string;
        spoon_stir: string;
    };
    let music: {
        main_theme: string;
    };
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
        office: {
            name: string;
            background: string;
        };
        blackScreen: {
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
            pose: {
                sad: string;
            };
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
    function examAnimation(): ƒS.AnimationDefinition;
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
