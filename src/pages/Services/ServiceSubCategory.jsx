import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Layout/Header/Navbar";
import Footer from "../../components/Layout/Footer/Footer";
import { getSubCategories } from "../../admin/api/subCategory.api";

const ServiceSubCategory = () => {
  const { subCategoryId } = useParams();

  const [subCategory, setSubCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getSubCategories();

        if (res?.data?.data) {
          const found = res.data.data.find(
            (item) => item._id === subCategoryId
          );
          setSubCategory(found || null);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [subCategoryId]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!subCategory) {
    return <div className="min-h-screen flex items-center justify-center">No Data Found</div>;
  }

  return (
    <>
      <Navbar />

      {/* HERO */}
      <div
        className="w-full h-[420px] bg-cover bg-center"
        style={{ backgroundImage: `url(${subCategory.image})` }}
      />

      {/* CONTENT */}
      <div className="bg-black text-white text-center px-6 py-14">
        <h1 className="text-2xl md:text-3xl font-extrabold uppercase mb-4">
          {subCategory.name}
        </h1>

        {subCategory.description && (
          <p className="max-w-4xl mx-auto opacity-90">
            {subCategory.description}
          </p>
        )}
      </div>

      <Footer />
    </>
  );
};

export default ServiceSubCategory;
