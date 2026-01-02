import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Layout/Header/Navbar";
import Footer from "../../components/Layout/Footer/Footer";
import API from "../../api/axios";

const ServicesHome = () => {
  const [hero, setHero] = useState("");
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServicesHome();
  }, []);

  const fetchServicesHome = async () => {
    try {
      const res = await API.get("/services/home");
      setHero(res.data.heroImage);
      setServices(res.data.categories);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />

      {/* HERO */}
      <div
        className="w-full h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      />

      {/* GRID */}
      <div className="max-w-[1300px] mx-auto px-5 my-12 flex flex-wrap justify-center gap-6 slide-in">
        {services.map((item, index) => (
          <Link
            key={item._id}
            to={`/services/${item.slug}`}
            className={`relative overflow-hidden flex-grow basis-[30%] max-w-[390px]
                        group delay-${index + 1}`}
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/45 group-hover:bg-black/10 transition" />

            {/* TEXT */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h2 className="text-white text-[28px] font-extrabold uppercase text-center">
                {item.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default ServicesHome;
