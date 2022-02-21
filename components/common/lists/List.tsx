import React, {ReactNode} from "react";

interface ListProps {
    children: ReactNode;
}

function List({children}: ListProps) {

    return (
        <ul>
            {children}
        </ul>
    )
}

export default List;
