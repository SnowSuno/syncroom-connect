import React, {ReactNode} from "react";
import classNames from "classnames";
import styles from "./Masonry.module.scss";

import MasonryCSS from "react-masonry-css";


interface MasonryProps {
    children: ReactNode;
}

const Masonry = ({children}: MasonryProps) => (
    <MasonryCSS
        breakpointCols={4}
        className={classNames("Masonry", styles.grid)}
        columnClassName={styles.column}
    >
        {children}
    </MasonryCSS>
)

export default Masonry;
