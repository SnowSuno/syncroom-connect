import React from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps {
    onClick: () => void;
    children: string
}

const Button = ({onClick, children}: ButtonProps) => {


    return (
        <button
            className={classNames("Button", styles.main)}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
