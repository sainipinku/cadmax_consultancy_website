import { Navigate } from "react-router-dom";

const AdminPrivate = ({ children }) => {
  const token = localStorage.getItem("adminToken");
  return token ? children : <Navigate to="/admin/login" replace />;
};

export default AdminPrivate;
