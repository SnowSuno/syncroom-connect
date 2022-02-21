import type {NextPage} from 'next'
import Head from 'next/head'
import styles from './Home.module.css'

import {useRoomData} from "../utils/hooks/useRoomData";


import RoomGrid from "../components/home/RoomGrid";


const Home: NextPage = () => {
    const {data} = useRoomData();

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <RoomGrid data={data}/>
        </div>
    )
}


export default Home

