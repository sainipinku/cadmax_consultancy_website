import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";

// Projects
import ProjectList from "../pages/projects/ProjectList";
import AddProject from "../pages/projects/AddProject";
import EditProject from "../pages/projects/EditProject";

// Services
import ServiceList from "../pages/services/ServiceList";
import AddService from "../pages/services/AddService";
import EditService from "../pages/services/EditService";

import ServiceCategories from "../../admin/pages/services/ServiceCategories";
import ServiceCategoryEditor from "../../admin/pages/services/ServiceCategoryEditor";

// Settings
import ProfileUpdate from "../pages/settings/ProfileUpdate";
import ResetPassword from "../pages/settings/ResetPassword";

const isAuth = () => localStorage.getItem("isAdminAuth") === "true";

const AdminRoutes = () => {
  return (
    <Routes>
      {/* PUBLIC ROUTE */}
      <Route path="/admin/login" element={<Login />} />

      {/* PROTECTED ROUTES */}
      <Route
        path="/admin"
        element={
          isAuth() ? <AdminLayout /> : <Navigate to="/admin/login" replace />
        }
      >
        {/* Dashboard */}
        <Route index element={<Dashboard />} />

        {/* Projects */}
        <Route path="projects" element={<ProjectList />} />
        <Route path="projects/add" element={<AddProject />} />
        <Route path="projects/edit/:id" element={<EditProject />} />

        {/* Services */}
        <Route path="/admin/services" element={<ServiceCategories />} />
<Route path="/admin/services/:category" element={<ServiceCategoryEditor />} />

        {/* <Route path="services" element={<ServiceList />} />
        <Route path="services/add" element={<AddService />} />
        <Route path="services/edit/:id" element={<EditService />} /> */}

        {/* Settings */}
        <Route path="profile" element={<ProfileUpdate />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
