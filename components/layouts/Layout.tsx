import React, {ReactNode} from "react";

import Header from "../organisms/Header";

interface LayoutProps {
    children: ReactNode;
}

function Layout({children}: LayoutProps) {
    return (
        <>
            <Header/>
            <main>{children}</main>
        </>
    )
}

export default Layout;
