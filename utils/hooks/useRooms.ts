import {useEffect, useState} from "react";
import {getApiData} from "../../core/api/syncroom";
import {Room} from "../../core/classes/room";


const getRooms = async () => {
    const {rooms} = await getApiData();
    return rooms.map(roomData => new Room(roomData));
}

export const useRooms = () => {
    const [data, setData] = useState<Room[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<unknown>(null);

    const fetchRooms = async () => {
        try {
            setError(null);
            const data = await getRooms();
            setData(data);
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchRooms().then();
        const id = setInterval(fetchRooms, 5000)
        return () => clearInterval(id);
    }, []);

    return {data, loading, error};
}
