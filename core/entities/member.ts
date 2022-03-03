import {ApiIconData} from "../api/syncroom";
import {Icon, PrivateIcon, PublicIcon, TempIcon} from "./icon";

export class Member {
    public readonly name: string;
    public readonly icon: Icon;

    constructor(name: string, icon: Icon) {
        this.name = name;
        this.icon = icon;
    }

    public get id(): string {
        return this.name;
    }
}

export class PublicMember extends Member {
    constructor(
        name: string,
        icon: ApiIconData | undefined,
        isCreator: boolean = false
    ) {
        // TODO : isCreator logic
        super(name, new PublicIcon(icon));
    }

}

export class PrivateMember extends Member {
    private readonly _count: number

    constructor(privateCount: number) {
        super("비공개 프로필", new PrivateIcon());
        this._count = privateCount;
        privateCount++;
    }

    public get id() {
        return `private${this._count}`
    }
}

export class TempMember extends Member {
    constructor(icon: ApiIconData | undefined,) {
        super("임시 참여 중", new TempIcon(icon));
    }
}

// export const PrivateMember = (privateCount: number) => {
//     privateCount++;
//     return new Member(
//         "비공개 프로필" + privateCount,
//         "비공개 프로필",
//         {
//             icon: "qwer",
//             iconurl: "qwer"
//         },
//         MemberType.PRIVATE,
//     )
// }
