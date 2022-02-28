import React from "react";
import styles from "./styles.module.scss";

function Header ()  {
    const [count, setCount] = React.useState(0);


    return (<>
        <header className={styles.container}>
            this is header
            <button onClick={() => setCount(count + 1)}>{count}</button>


        </header>
        <div className={styles.placeholder}/>
    </>)
}

export default Header;
