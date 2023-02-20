import { Outlet } from "react-router-dom";

import Tabbar from "./tabbar";

const Layout = () => {
    return (
        <div className="flex flex-col h-screen">
            <main className="flex-1">
                <Outlet />
            </main>
            <nav className="sticky bottom-0 w-full">
                <Tabbar />
            </nav>
        </div>
    );
}

export default Layout;