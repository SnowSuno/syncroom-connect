import React, {ReactElement, ReactNode} from "react";
import styles from "./Card.module.scss";

interface CardProps {
    children: ReactNode;
    width?: number | string;
    height?: number | string;
}

const Card = (
    {
        children,
        width = "auto",
        height = "auto", ...extra
    }: CardProps
) => (
    <div
        className={styles.container}
        style={{width, height, padding: 15}}
        {...extra}
    >
        {children}
    </div>
);

export default Card;