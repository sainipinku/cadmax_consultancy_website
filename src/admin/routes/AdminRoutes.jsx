import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";

/* AUTH */
import Login from "../pages/auth/Login";

/* DASHBOARD */
import Dashboard from "../pages/dashboard/Dashboard";

/* SERVICES */
import CategoryList from "../pages/services/CategoryList";
import CategoryForm from "../pages/services/CategoryForm";
import SubCategoryList from "../pages/services/SubCategoryList";
import SubCategoryForm from "../pages/services/SubCategoryForm";

/* PROJECTS */
import ProjectList from "../pages/projects/ProjectList";
import AddProject from "../pages/projects/AddProject";
import EditProject from "../pages/projects/EditProject";

/* SETTINGS */
import ProfileUpdate from "../pages/settings/ProfileUpdate";
import ResetPassword from "../pages/settings/ResetPassword";

const isAuth = () => localStorage.getItem("isAdminAuth") === "true";

const AdminRoutes = () => {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route path="/admin/login" element={<Login />} />

      {/* PROTECTED */}
      <Route
        path="/admin"
        element={
          isAuth() ? <AdminLayout /> : <Navigate to="/admin/login" replace />
        }
      >
        {/* Dashboard */}
        <Route index element={<Dashboard />} />

        {/* ===== SERVICES ===== */}
        {/* Category */}
        <Route path="services/categories" element={<CategoryList />} />
        <Route path="services/categories/add" element={<CategoryForm />} />
        <Route
          path="services/categories/edit/:id"
          element={<CategoryForm />}
        />

        {/* SubCategory */}
        <Route path="services/subcategories" element={<SubCategoryList />} />
        <Route
          path="services/subcategories/add"
          element={<SubCategoryForm />}
        />
        <Route
          path="services/subcategories/edit/:id"
          element={<SubCategoryForm />}
        />

        {/* ===== PROJECTS ===== */}
        <Route path="projects" element={<ProjectList />} />
        <Route path="projects/add" element={<AddProject />} />
        <Route path="projects/edit/:id" element={<EditProject />} />

        {/* ===== SETTINGS ===== */}
        <Route path="profile" element={<ProfileUpdate />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
