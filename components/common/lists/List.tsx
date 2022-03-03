import React, {ReactNode} from "react";
import classNames from "classnames";

interface ListProps {
    children: ReactNode;
    className?: string;
}

function List({className, children}: ListProps) {

    return (
        <ul className={classNames("List", className)}>
            {children}
        </ul>
    )
}

export default List;
