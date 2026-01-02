import {
  LayoutDashboard,
  FolderKanban,
  Layers,
  Grid,
  Home,
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
    <div className="w-64 bg-slate-900 text-white flex flex-col">
      {/* LOGO */}
      <div className="h-16 flex items-center justify-center text-2xl font-bold border-b border-slate-700">
        CADMAX
      </div>

      {/* NAV */}
      <nav className="flex-1 p-4 space-y-6 overflow-y-auto">
        <NavItem
          to="/admin"
          icon={<LayoutDashboard size={18} />}
          label="Dashboard"
        />

        <div>
          <p className="text-xs uppercase text-slate-400 px-3 mb-2">
            Services
          </p>

          {/* SERVICE CATEGORY FILTER PAGE */}
          <NavItem
            to="/admin/services/categories"
            icon={<Layers size={18} />}
            label="Service Categories"
          />

          {/* ENGINEERING */}
          <NavItem
            to="/admin/services/engineering"
            icon={<Grid size={18} />}
            label="Engineering"
          />

          {/* SURVEYING */}
          <NavItem
            to="/admin/services/surveying"
            icon={<Grid size={18} />}
            label="Surveying"
          />

          {/* PLANNING */}
          <NavItem
            to="/admin/services/planning"
            icon={<Grid size={18} />}
            label="Planning"
          />
        </div>

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
    </div>
  );
};

const NavItem = ({ to, icon, label }) => (
  <NavLink
    to={to}
    end
    className={({ isActive }) =>
      `flex items-center gap-3 px-3 py-2 rounded-lg transition ${
        isActive ? "bg-slate-800" : "hover:bg-slate-800"
      }`
    }
  >
    {icon}
    <span>{label}</span>
  </NavLink>
);

export default Sidebar;
