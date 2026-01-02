import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, Image } from "lucide-react";
import { useNavigate } from "react-router-dom";
import API from "../../../api/axios";

const ServicesHomeList = () => {
  const navigate = useNavigate();
  const [hero, setHero] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await API.get("/services/home");
    setHero(res.data.heroImage);
    setCategories(res.data.categories);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this category?")) return;
    await API.delete(`/services/home/category/${id}`);
    fetchData();
  };

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Services Home</h1>

        <div className="flex gap-3">
          <button
            onClick={() => navigate("/admin/services/home/hero")}
            className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded"
          >
            <Image size={16} /> Update Hero
          </button>

          <button
            onClick={() => navigate("/admin/services/home/add")}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded"
          >
            <Plus size={16} /> Add Category
          </button>
        </div>
      </div>

      {/* HERO PREVIEW */}
      {hero && (
        <img
          src={hero}
          alt="Hero"
          className="w-full h-48 object-cover rounded border"
        />
      )}

      {/* CATEGORY TABLE */}
      <div className="bg-white rounded border overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100 text-sm">
            <tr>
              <th className="p-4">Image</th>
              <th>Title</th>
              <th>Slug</th>
              <th className="text-right p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((cat) => (
              <tr key={cat._id} className="border-t">
                <td className="p-4">
                  <img
                    src={cat.image}
                    className="w-20 h-14 object-cover rounded"
                  />
                </td>
                <td className="font-medium">{cat.title}</td>
                <td className="text-sm text-slate-500">{cat.slug}</td>
                <td className="p-4 text-right flex justify-end gap-3">
                  <button
                    onClick={() =>
                      navigate(`/admin/services/home/edit/${cat._id}`)
                    }
                    className="text-blue-600"
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(cat._id)}
                    className="text-red-600"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}

            {categories.length === 0 && (
              <tr>
                <td colSpan="4" className="p-6 text-center text-slate-500">
                  No categories yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServicesHomeList;
