import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import AddTeamMember from "../pages/team/AddTeamMember";
import ContactList from "../pages/contacts/ContactList";
import JobList from "../pages/jobs/JobList";
import CareerList from "../pages/careers/CareerList";
import ProjectList from "../pages/projects/ProjectList";
import ProfileUpdate from "../pages/settings/ProfileUpdate";
import ResetPassword from "../pages/settings/ResetPassword";

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
        <Route path="team" element={<AddTeamMember />} />
        <Route path="contacts" element={<ContactList />} />
        <Route path="jobs" element={<JobList />} />
        <Route path="careers" element={<CareerList />} />
        <Route path="projects" element={<ProjectList />} />
        <Route path="profile" element={<ProfileUpdate />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
