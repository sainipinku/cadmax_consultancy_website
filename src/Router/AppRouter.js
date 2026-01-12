import { BrowserRouter, Routes, Route } from "react-router-dom";


// home page 
import Home from "../pages/home/home";

// about page 
import About from "../pages/About/About";


 // main page 
import Services from "../pages/Services/Services";


 //  main sub_page
import Engineering from "../pages/Services/Engineering";



 // Engineering sub page  
import Maingate from "../pages/Services/Engineering-subpage/maingate";
import Roadnetwork from "../pages/Services/Engineering-subpage/roadNetwork";
import Watersupply from "../pages/Services/Engineering-subpage/waterSupply";
import Electricity1 from "../pages/Services/Engineering-subpage/electricity";
import Sewer from "../pages/Services/Engineering-subpage/Sewer";


// project
import Project from "../pages/Project/Project";

// contact
import Contact from "../pages/contact/Contact";

// careerpath 
import Careerpath from "../pages/CAREER-PATHS/careerpath"

// admin 
import AdminRoutes from "../admin/routes/AdminRoutes";




export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* static page  */}
        <Route path="/Services" element={<Services />} />
        <Route path="/Services/Engineering" element={<Engineering />} />
        
        <Route path="/Services/maingate" element={<Maingate />} />
        <Route path="/Services/electricity" element={<Electricity1 />} />
        <Route path="/Services/roadNetwork" element={<Roadnetwork />} />
        <Route path="/Services/waterSupply" element={<Watersupply />} />
        <Route path="/Services/Sewer" element={<Sewer />} />
       
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
