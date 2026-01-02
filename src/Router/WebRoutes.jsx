import { Routes, Route } from "react-router-dom";
import ServicesHome from "../pages/Services/ServicesHome";
import ServiceCategory1 from "../pages/Services/ServiceCategory1";
import ServicePage from "../pages/Services/ServicePage";


const WebRoutes = () => {
  return (
    <Routes>
      <Route path="/servicesHome" element={<ServicesHome />} />
      <Route path="/services/:categorySlug" element={<ServiceCategory1 />} />
      <Route
        path="/servicesHome/:categorySlug/:pageSlug"
        element={<ServicePage />}
      />
    </Routes>
  );
};

export default WebRoutes;
