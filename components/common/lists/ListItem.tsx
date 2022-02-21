import React, {ReactElement, ReactNode} from "react";

interface ListItemProps {
    children: ReactNode;
    icon?: ReactElement;
}

function ListItem({children, icon}: ListItemProps) {

    return (
        <li>
            {children}
        </li>
    )
}

export default ListItem;
