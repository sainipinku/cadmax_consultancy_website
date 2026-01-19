import AuthLayout from "./AuthLayout";
import SideBar from "./sidebar";

const AdminLayout = () => {
  return <AuthLayout sidebar={<SideBar />} />;
};

export default AdminLayout;
