import React, {ReactNode} from "react";
import classNames from "classnames";
import styles from "./Modal.module.scss";

interface ModalWrapperProps {
    children: ReactNode;
}

function Modal({children}: ModalWrapperProps) {

    return (
        <>
            <div className={styles.backdrop}/>
            <div className={classNames("Modal", styles.container)}>
                {children}
            </div>
        </>
    )
}
