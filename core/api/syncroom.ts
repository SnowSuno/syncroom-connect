import axios from "axios";

const SYNCROOM_API = "https://webapi.syncroom.appservice.yamaha.com/ndroom/room_list.json?pagesize=500";

export const getApiData = async () => {
    const response = await axios.get<Response>(SYNCROOM_API, {timeout: 5000});
    return response.data;
}


export interface ApiIconData {
    icon: string;
    iconurl: string;
}

export interface ApiRoomData {
    index: number;
    realm: number;
    room_name: string;
    room_desc: string;
    tag_mask?: string;
    tag_orig?: string;
    need_passwd: boolean;
    create_time: string;
    creator_mid: string;
    creator_nick: string;
    creator_icon: ApiIconData;
    num_members: number;
    members: string[];
    iconlist?: ApiIconData[];
}

export interface Response {
    rooms: ApiRoomData[];
    page_curr: number;
    page_total: number;
    page_size: number;
    num_rooms_in_page: number;
    total_published_rooms: number;
    total_unpublished_rooms: number;
}
