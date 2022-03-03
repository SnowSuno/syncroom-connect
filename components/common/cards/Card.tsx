import React, {CSSProperties, ReactNode} from "react";
import classNames from "classnames";
import styles from "./Card.module.scss";

interface CardProps {
    children: ReactNode;
    style?: CSSProperties;
    className?: string;
    padding?: number | string;
}

const Card = (
    {
        children,
        style,
        className,
        ...extra
    }: CardProps
) => (
    <div
        className={classNames("Card", styles.container, className)}
        style={style}
        {...extra}
    >
        {children}
    </div>
);

export default Card;
