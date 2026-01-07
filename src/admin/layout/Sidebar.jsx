import {
  LayoutDashboard,
  FolderKanban,
  Layers,
  ListTree,
  LogOut,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("isAdminAuth");
    navigate("/admin/login", { replace: true });
  };

  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col">
      {/* LOGO */}
      <div className="h-16 flex items-center justify-center text-2xl font-bold border-b border-slate-700">
        CADMAX
      </div>

      {/* NAV */}
      <nav className="flex-1 p-4 space-y-6 overflow-y-auto">

        {/* DASHBOARD */}
        <NavItem
          to="/admin"
          icon={<LayoutDashboard size={18} />}
          label="Dashboard"
          exact
        />

        {/* SERVICES */}
        <div>
          <p className="text-xs uppercase text-slate-400 px-3 mb-2">
            Services
          </p>

          <NavItem
            to="/admin/services/categories"
            icon={<Layers size={18} />}
            label="Categories"
          />

          <NavItem
            to="/admin/services/subcategories"
            icon={<ListTree size={18} />}
            label="Sub Categories"
          />
        </div>

        {/* PROJECTS */}
        <div>
          <p className="text-xs uppercase text-slate-400 px-3 mb-2">
            Projects
          </p>

          <NavItem
            to="/admin/projects"
            icon={<FolderKanban size={18} />}
            label="All Projects"
          />
        </div>
      </nav>

      {/* LOGOUT */}
      <div className="p-4 border-t border-slate-700">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-3 py-2 rounded-lg
                     hover:bg-red-600 text-red-400 hover:text-white transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

const NavItem = ({ to, icon, label, exact }) => (
  <NavLink
    to={to}
    end={exact}
    className={({ isActive }) =>
      `flex items-center gap-3 px-3 py-2 rounded-lg transition ${
        isActive
          ? "bg-slate-800 text-white"
          : "text-slate-300 hover:bg-slate-800 hover:text-white"
      }`
    }
  >
    {icon}
    <span>{label}</span>
  </NavLink>
);

export default Sidebar;
