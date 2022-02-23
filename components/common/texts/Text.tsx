import React, {CSSProperties} from "react";
import styles from "./Text.module.scss";
import classNames from "classnames";

interface TextProps {
    children?: string;
    className?: string;
    style?: CSSProperties;
}


const head = ({children, className, style}: TextProps) => (
    <h1
        className={classNames(styles.head, className)}
        style={style}
    >
        {children}
    </h1>
);

const desc = ({children, className, style}: TextProps) => (
    <span
        className={classNames(styles.desc, className)}
        style={style}
    >
        {children}
    </span>
);


const Text = {
    head,
    desc,
}

export default Text;
