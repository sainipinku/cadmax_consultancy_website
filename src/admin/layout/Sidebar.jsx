import {
  LayoutDashboard,
  Users,
  Phone,
  Briefcase,
  FolderKanban,
  User,
  Lock,
  LogOut,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
  localStorage.removeItem("isAdminAuth");
  navigate("/admin/login", { replace: true });
  window.location.reload(); // 🔥 IMPORTANT
};


  return (
    <div className="w-64 h-screen bg-slate-900 text-white flex flex-col">
      <div className="h-16 flex items-center justify-center text-2xl font-bold border-b border-slate-700">
        CADMAX
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <NavItem to="/admin" icon={<LayoutDashboard />} label="Overview" />
        <NavItem to="/admin/team" icon={<Users />} label="Add Team Member" />
        <NavItem to="/admin/contacts" icon={<Phone />} label="Contact List" />
        <NavItem to="/admin/jobs" icon={<Briefcase />} label="Job List" />
        <NavItem to="/admin/careers" icon={<Briefcase />} label="Career List" />
        <NavItem to="/admin/projects" icon={<FolderKanban />} label="Project List" />
        <NavItem to="/admin/profile" icon={<User />} label="Profile Update" />
        <NavItem to="/admin/reset-password" icon={<Lock />} label="Reset Password" />
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
