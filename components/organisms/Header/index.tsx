import React from "react";
import styles from "./styles.module.scss";

import Image from "next/image";

function Header ()  {


    return (<>
        <header className={styles.container}>

            <Image src="/assets/title.svg" alt="" height={60} width={160}/>


        </header>
        <div className={styles.placeholder}/>
    </>)
}

export default Header;
