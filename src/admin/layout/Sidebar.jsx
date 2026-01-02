import {
  LayoutDashboard,
  FolderKanban,
  Layers,
  Grid,
  Home,
  LogOut,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../../api/axios";

const Sidebar = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [openCat, setOpenCat] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("isAdminAuth");
    navigate("/admin/login", { replace: true });
  };

  // 🔹 FETCH SERVICE STRUCTURE
  useEffect(() => {
    API.get("/admin/sidebar/services")
      .then(res => setServices(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="w-64 bg-slate-900 text-white flex flex-col">
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
        />

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

        {/* SERVICES */}
        <div>
          <p className="text-xs uppercase text-slate-400 px-3 mb-2">
            Services
          </p>

          {/* 🔹 SERVICE HOME (GLOBAL) */}
          <NavItem
            to="/admin/services/home"
            icon={<Home size={18} />}
            label="Service Home"
          />

          {/* MASTER CATEGORY */}
          <NavItem
            to="/admin/services/categories"
            icon={<Layers size={18} />}
            label="Service Categories"
          />

          {/* 🔹 DYNAMIC SERVICE TREE */}
          {services.map(cat => (
            <div key={cat._id} className="mt-1">
              {/* CATEGORY */}
              <button
                onClick={() =>
                  setOpenCat(openCat === cat._id ? null : cat._id)
                }
                className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-slate-800"
              >
                <div className="flex items-center gap-3">
                  <Grid size={16} />
                  <span>{cat.title}</span>
                </div>
                {openCat === cat._id ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </button>

              {/* SUB PAGES */}
              {openCat === cat._id && (
                <div className="ml-8 mt-1 space-y-1">
                  {cat.pages.map(page => (
                    <div key={page._id}>
                      {/* PAGE CONTENT (Hero / Tabs / Gallery) */}
                      <NavLink
                        to={`/admin/services/pages/${page._id}`}
                        className={({ isActive }) =>
                          `block px-2 py-1 rounded text-sm ${
                            isActive
                              ? "bg-slate-800"
                              : "hover:bg-slate-800"
                          }`
                        }
                      >
                        {page.title}
                      </NavLink>

                      {/* PROJECTS / SLIDER */}
                      {page.hasProjects && (
                        <NavLink
                          to={`/admin/services/projects/${page._id}`}
                          className="block ml-3 px-2 py-1 text-xs text-slate-400 hover:text-white"
                        >
                          ▸ Projects / Slider
                        </NavLink>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
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
