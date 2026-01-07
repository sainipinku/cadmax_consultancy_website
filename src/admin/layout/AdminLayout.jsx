import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../layout/Sidebar";

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAdminAuth");
    const token = localStorage.getItem("adminToken");

    if (!isAuth || !token) {
      navigate("/admin/login", { replace: true });
    }
  }, [navigate]);

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENT AREA */}
      <div className="flex-1 flex flex-col">
        {/* TOP BAR */}
        <header className="h-16 bg-white border-b flex items-center px-6 shadow-sm">
          <h1 className="text-lg font-semibold text-slate-700 capitalize">
            {location.pathname
              .replace("/admin/", "")
              .replaceAll("/", " › ") || "Dashboard"}
          </h1>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
