import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import ProjectList from "../pages/projects/ProjectList";
import ProfileUpdate from "../pages/settings/ProfileUpdate";
import ResetPassword from "../pages/settings/ResetPassword";
import AddService from "../pages/services/AddService";
import EditService from "../pages/services/EditService";
import ServiceList from "../pages/services/ServiceList";


const isAuth = () => localStorage.getItem("isAdminAuth") === "true";

const AdminRoutes = () => {
  return (
    <Routes>
      {/* Public */}
      <Route path="/admin/login" element={<Login />} />

      {/* Protected */}
      <Route
        path="/admin"
        element={
          isAuth() ? <AdminLayout /> : <Navigate to="/admin/login" replace />
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="projects" element={<ProjectList />} />
        <Route path="profile" element={<ProfileUpdate />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="/admin/services" element={<ServiceList />} />
        <Route path="/admin/services/add" element={<AddService />} />

        
        <Route
          path="/admin/services/edit/:id"
          element={<EditService />}
        />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
