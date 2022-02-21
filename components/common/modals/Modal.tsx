import React, {ReactNode} from "react";
import styles from "./Modal.module.scss";

interface ModalWrapperProps {
    children: ReactNode;
}

function Modal({children}: ModalWrapperProps) {

    return (
        <>
            <div className={styles.backdrop}/>
            <div className={styles.container}>
                {children}
            </div>
        </>
    )
}
