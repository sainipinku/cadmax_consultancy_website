import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";

// Projects
import ProjectList from "../pages/projects/ProjectList";
import AddProject from "../pages/projects/AddProject";
import EditProject from "../pages/projects/EditProject";


import ServicesHeroForm from "../pages/services/ServicesHeroForm";
import ServicesHomeForm from "../pages/services/ServicesHomeForm";
import ServicesHomeList from "../pages/services/ServicesHomeList";

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

     <Route path="/admin/services/home" element={<ServicesHomeList />} />
<Route path="/admin/services/home/add" element={<ServicesHomeForm />} />
<Route path="/admin/services/home/edit/:id" element={<ServicesHomeForm />} />
<Route path="/admin/services/home/hero" element={<ServicesHeroForm />} />





        {/* Settings */}
        <Route path="profile" element={<ProfileUpdate />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
