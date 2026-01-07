import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Layout/Header/Navbar";
import Footer from "../../components/Layout/Footer/Footer";
import API from "../../api/axios";


const Service1 = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await API.get("/categories");
        setCategories(res.data); // ✅ FIX HERE
        console.log(res.data, "categories");
      } catch (error) {
        console.error("Failed to load services", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <div
        className="w-full h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/assets/Images/service-page-1/service-banner.jpg)",
        }}
      />

      {/* GRID */}
      <div className="max-w-[1300px] mx-auto px-5 py-12">
        {loading ? (
          <p className="text-center text-lg">Loading services...</p>
        ) : (
          <div className="flex flex-wrap justify-center gap-6">
            {categories.map((item, index) => (
              <Link
                key={item._id}
                to={`/services/${item.slug}`}
                className="group relative w-full sm:w-[48%] lg:w-[32%] max-w-[390px]
                           overflow-hidden rounded-lg  animate-slideIn"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* IMAGE */}
                <img
                  src={item.image?.url}
                  alt={item.name}
                  className="w-full h-[420px] object-cover transition-transform
                             duration-500 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/45
                                group-hover:bg-black/10 transition-all duration-300" />

                {/* TEXT */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <h2 className="text-white text-2xl md:text-3xl font-extrabold uppercase text-center drop-shadow-lg">
                    {item.name}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Service1;
