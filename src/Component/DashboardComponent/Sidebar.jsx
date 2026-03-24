import { Braces, LayoutDashboard, LogIn, MessageCircleWarning } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
    const dashlink = [
        {
            name: "Dashboard",
            to: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            name: "Reports",
            to: "/reports",
            icon: MessageCircleWarning,
        },
    ];

    return (
        <aside
            className="select-text fixed left-2 top-2 bottom-2
      flex flex-col gap-5 px-4 py-4 bg-purple-600 w-56 rounded-lg"
        >
            <NavLink to="/dashboard">
                <div className="flex text-xl items-center gap-1 text-white">
                    <Braces size={19} /> Rest JSON
                </div>
            </NavLink>

            <hr className="w-40 border-white/40" />

            <ul className="flex flex-col gap-5">
                {dashlink.map((item, idx) => (
                    <li key={idx}>
                        <NavLink
                            to={item.to}
                            className={({ isActive }) =>
                                `flex items-center gap-2 p-2 rounded-lg transition-all duration-300
                ${isActive
                                    ? "bg-purple-800 text-white font-semibold"
                                    : "text-white hover:bg-purple-700"
                                }`
                            }
                        >
                            <item.icon size={18} />
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div className="mt-115">
                <Link to='/login' className="text-white hover:bg-purple-700 p-2 flex justify-center w-full rounded-lg">
                    <div className="flex items-center gap-2">
                        Log-out <LogIn size={20} />
                    </div>
                </Link>
            </div>
        </aside>
    );
};

export default Sidebar;
