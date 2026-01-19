import { useState } from "react";
import { ChevronDown, LogOut, Mail, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // 🔹 Static admin data (later backend se aayega)
  const admin = {
    name: "cadmax",
    email: "admin@cadmax.com",
    avatar: "https://i.pravatar.cc/100?img=3",
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdminAuth");
    navigate("/admin/login", { replace: true });
    window.location.reload();
  };

  return (
    <div className="h-16 bg-white border-b flex items-center justify-end px-6 relative">
      {/* Profile Trigger */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 cursor-pointer select-none"
      >
        <img
          src={admin.avatar}
          alt="Admin"
          className="w-9 h-9 rounded-full object-cover"
        />

        <span className="font-medium text-slate-700">
          {admin.name}
        </span>

        <ChevronDown size={16} className="text-slate-500" />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-6 top-16 mt-2 w-64 bg-white border rounded-xl shadow-lg z-50 overflow-hidden">
          {/* Admin Info */}
          <div className="p-4 border-b bg-slate-50">
            <div className="flex items-center gap-3">
              <img
                src={admin.avatar}
                alt="Admin"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-slate-800">
                  {admin.name}
                </p>
                <div className="flex items-center gap-1 text-sm text-slate-500">
                  <Mail size={14} />
                  {admin.email}
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="py-1">
            <button
              onClick={() => {
                navigate("/admin/profile");
                setOpen(false);
              }}
              className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-slate-100"
            >
              <User size={16} />
              Update Profile
            </button>


            <button
              onClick={() => {
                navigate("/admin/reset-password");
                setOpen(false);
              }}
              className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-slate-100"
            >
              <User size={16} />
              Reset Password
            </button>

            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
