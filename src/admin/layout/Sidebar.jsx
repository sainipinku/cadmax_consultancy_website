import {
  LayoutDashboard,
  FolderKanban,
  Layers,
  LogOut,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdminAuth");
    navigate("/admin/login", { replace: true });
    window.location.reload();
  };

  return (
    <div className="w-64 bg-slate-900 text-white flex flex-col">
      <div className="h-16 flex items-center justify-center text-2xl font-bold border-b border-slate-700">
        CADMAX
      </div>

      <nav className="flex-1 p-4 space-y-2">

        <NavItem
          to="/admin"
          icon={<LayoutDashboard size={18} />}
          label="Overview"
        />

        <NavItem
          to="/admin/projects"
          icon={<FolderKanban size={18} />}
          label="Project List"
        />

        {/* SERVICES SECTION */}
        <div className="mt-4">
          <p className="text-xs uppercase text-slate-400 px-3 mb-2">
            Services
          </p>

          <NavItem
            to="/admin/services/1"
            icon={<Layers size={18} />}
            label="Service One"
          />
          <NavItem
            to="/admin/services/2"
            icon={<Layers size={18} />}
            label="Service Two"
          />
          <NavItem
            to="/admin/services/3"
            icon={<Layers size={18} />}
            label="Service Three"
          />
        </div>

      </nav>

      {/* Logout bottom */}
      <div className="p-4 border-t border-slate-700">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-red-600 text-red-400 hover:text-white"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
};

const NavItem = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 ${
        isActive ? "bg-slate-800" : ""
      }`
    }
  >
    {icon}
    <span>{label}</span>
  </NavLink>
);

export default Sidebar;
