import React, {ReactNode} from "react";
import classNames from "classnames";
import styles from "./Modal.module.scss";

interface ModalWrapperProps {
    children: ReactNode;
    open: boolean;
    close: () => void;
}

const Modal = ({children, open, close}: ModalWrapperProps) => {

    return (<>
        <div className={classNames("Modal", styles.container)}>
            {children}
        </div>
        <div
            className={classNames(
                styles.backdrop,
                {[styles.open]: open}
            )}
            onClick={close}
        />
    </>)
}

export default Modal;
