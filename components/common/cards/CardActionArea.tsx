import React, {ReactNode} from "react";
import classNames from "classnames";
import styles from "./CardActionArea.module.scss";

interface CardActionAreaProps {
    children: ReactNode;
    onClick?: () => void;
}

const CardActionArea = (
    {
        children,
        onClick,
    }: CardActionAreaProps
) => (
    <button
        className={classNames("CardActionArea", styles.main)}
        onClick={onClick}
    >
        {children}
    </button>
)

export default CardActionArea;
