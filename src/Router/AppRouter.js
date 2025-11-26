import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/home/home";
// import About from "../pages/About/About";
import Service1 from "../pages/Services/Service1";
import Service2 from "../pages/Services/Service2";
import Service3 from "../pages/Services/Service3";

// import Contact from "../pages/Contact/Contact";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/Services/Service1" element={<Service1 />} />
       <Route path="/Services/Service2" element={<Service2 />} />
       <Route path="/Services/Service3" element={<Service3 />} />
        {/* <Route path="/about" element={<About />} />
        
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
