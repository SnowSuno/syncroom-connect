import {ApiIconData, ApiRoomData} from "../api/syncroom";
import {Country} from "../constants";
import {Member, PrivateMember, PublicMember, TempMember} from "./member";

import {encode} from "base62";
import memoize from "memoized-class-decorator";

const TAG_MAP = ["練習中", "おしゅべり", "初心者OK", "配信中", "録音中", "Classic", "Country/Folk", "Club Music/EDM", "Hip Hop/Rap", "R&B/Soul", "Jazz", "Fusion", "Rock", "HR/HM", "洋楽", "J-Pop", "アイドル", "アニメ・ゲーム・ボカロ", "World"];

const korean: RegExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;
const japanese: RegExp = /[ぁ-んァ-ン一-龯]/;

const idHash = (timestamp: string, mid: string): string => {
    const [date, time] = timestamp.split(' ');
    return encode(new Date(`${date}T${time}-00:00`)
        .getTime() % 21600000 * 1000 + parseInt(mid));
};

const memo = () => {

}

export class Room {
    public readonly id: string
    public readonly name: string;
    public readonly desc: string;
    public readonly isPrivate: boolean;

    private readonly _creator: string;
    // private readonly _tagMask?: string;
    // private readonly _tagOrig?: string;

    // private readonly _numMembers: number;
    // private readonly _memberNames: string[];
    // private readonly _memberIcons: ApiIconData[];
    public readonly country: Country;
    public readonly tags: string[];

    public readonly members: Member[];

    constructor(data: ApiRoomData) {
        this.id = idHash(data.create_time, data.creator_mid);
        this.name = data.room_name;
        this.desc = data.room_desc;
        this.isPrivate = data.need_passwd;

        this._creator = data.creator_nick;

        this.country = this._parseCountry()
        this.tags = this._parseTags(data.tag_mask, data.tag_orig);
        this.members = this._parseMembers(
            data.num_members,
            data.members,
            data.iconlist || [],
        )
    }

    private _parseCountry(): Country {
        let country: Country = Country.OTHER;
        [this._creator, this.desc, this.name].forEach(text => {
            if (korean.test(text)) {
                country = Country.KOREA;
            } else if (japanese.test(text)) {
                country = Country.JAPAN;
            }
        });
        return country;
    }

    private _parseTags(tagMask?: string, tagOrig?: string): string[] {
        if (!tagMask) return [];
        const binaryMask = parseInt(tagMask).toString(2).split("").reverse();
        const tags: string[] = TAG_MAP.filter((_, i) => binaryMask[i] === "1");
        if (binaryMask[31] === "1" && tagOrig) tags.push(tagOrig);
        return tags;
    }

    private _parseMembers(
        numMembers: number,
        names: string[],
        icons: ApiIconData[],
    ): Member[] {
        const numPrivateMembers = numMembers - names.length;

        const publicMembers: Member[] = names
            .filter(name => name !== "")
            .map((name, i) => new PublicMember(
                name,
                icons[i],
                name === this._creator
            ));

        const privateMembers: Member[] = Array.from(
            {length: numPrivateMembers},
            (_, i) => new PrivateMember(i));

        const tempMembers: Member[] = Array(
            numMembers - publicMembers.length - privateMembers.length
        ).fill(new TempMember());

        return [...publicMembers, ...privateMembers, ...tempMembers];
    }


    public get key() {
        return this.id + this.members.map(m => m.id).join("");
    }
}


