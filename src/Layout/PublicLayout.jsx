import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "../Component/DashboardComponent/Sidebar";

const PublicLayout = () => {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/login" replace />;
    }

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
