import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/home/home";
import About from "../pages/About/About";
import Service1 from "../pages/Services/Service1";
import Service2 from "../pages/Services/Service2";
import Service3 from "../pages/Services/Service3";
import Maingate from "../pages/Services/service2-subpage/maingate";
import Roadnetwork from "../pages/Services/service2-subpage/roadNetwork";
import Watersupply from "../pages/Services/service2-subpage/waterSupply";
import Electricity1 from "../pages/Services/service2-subpage/electricity";
import Project from "../pages/Project/Project";
import Contact from "../pages/contact/Contact";
import Careerpath from "../pages/CAREER-PATHS/careerpath"

// admin import
import AdminRoutes from "../admin/routes/AdminRoutes";





export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services/Service1" element={<Service1 />} />
        <Route path="/Services/Service2" element={<Service2 />} />
        <Route path="/Services/Service3" element={<Service3 />} />
        <Route path="/Services/maingate" element={<Maingate />} />
        <Route path="/Services/electricity" element={<Electricity1 />} />
        <Route path="/Services/roadNetwork" element={<Roadnetwork />} />
        <Route path="/Services/waterSupply" element={<Watersupply />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careerpath" element={<Careerpath/>} />



        {/* admin */}

        <Route path="/*" element={<AdminRoutes />} />


      </Routes>
    </BrowserRouter>
  );
}
