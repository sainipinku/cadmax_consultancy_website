import { useParams } from "react-router-dom";
import { useState } from "react";
import CategoryMainPage from "../tabs/CategoryMainPage";
import CategorySubPages from "../tabs/CategorySubPages";

const ServiceCategoryEditor = () => {
  const { category } = useParams();
  const [tab, setTab] = useState("main");

  return (
    <div className="bg-white p-6 rounded-xl">
      <h1 className="text-xl font-extrabold uppercase mb-6">
        {category}
      </h1>

      {/* TABS */}
      <div className="flex gap-4 border-b mb-6">
        <button
          onClick={() => setTab("main")}
          className={`pb-2 font-semibold ${
            tab === "main"
              ? "border-b-2 border-blue-600"
              : "text-gray-400"
          }`}
        >
          Main Page
        </button>

        <button
          onClick={() => setTab("sub")}
          className={`pb-2 font-semibold ${
            tab === "sub"
              ? "border-b-2 border-blue-600"
              : "text-gray-400"
          }`}
        >
          Sub Pages
        </button>
      </div>

      {/* CONTENT */}
      {tab === "main" && <CategoryMainPage category={category} />}
      {tab === "sub" && <CategorySubPages category={category} />}
    </div>
  );
};

export default ServiceCategoryEditor;
