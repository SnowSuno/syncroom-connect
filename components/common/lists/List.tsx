import React, {ReactNode} from "react";

interface ListProps {
    children: ReactNode;
    className?: string;
}

function List({className, children}: ListProps) {

    return (
        <ul className={className}>
            {children}
        </ul>
    )
}

export default List;
