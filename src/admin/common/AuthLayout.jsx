import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import API from "../../api/axios";

export default function AuthLayout({ sidebar, page }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("isAdminAuth");
    navigate("/admin/login");
  };

  const fetchProfile = async () => {
    try {
      await API.get("/admin/auth/profile");
    } catch (err) {
      localStorage.removeItem("adminToken");
      localStorage.removeItem("isAdminAuth");
      navigate("/admin/login");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {sidebar}

      <div className="flex-1 ml-[280px]">
        {/* TOP BAR */}
        <div className="fixed right-0 top-0 left-[280px] bg-white border-b h-16 flex items-center justify-between px-6 z-10">
          <h1 className="text-xl font-semibold">{page || "Dashboard"}</h1>

          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="border rounded-md w-10 h-10 flex items-center justify-center"
            >
              <FaRegUser />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                >
                  <MdLogout /> Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* PAGE CONTENT */}
        <div className="pt-20 px-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
