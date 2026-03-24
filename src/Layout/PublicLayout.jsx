import { Outlet } from "react-router-dom";
import Sidebar from "../Component/DashboardComponent/Sidebar";

const PublicLayout = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-10 px-3 py-2 ml-60">
                <Outlet />
            </div>
        </div>
    );
};

export default PublicLayout;
