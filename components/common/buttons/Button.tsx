import React from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps {
    onClick?: () => void;
    children?: string;
    primary?: boolean;
}

const Button = ({onClick, children, primary}: ButtonProps) => {


    return (
        <button
            className={classNames(
                "Button",
                styles.main,
                {[styles.primary]: primary}
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
