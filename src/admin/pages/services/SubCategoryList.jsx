import { useEffect, useState } from "react";
import {
  getSubCategories,
  deleteSubCategory,
} from "../../api/subCategory.api";
import { getCategories } from "../../api/category.api";
import SubCategoryForm from "./SubCategoryForm";

const SubCategoryList = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const fetchData = async () => {
    const res = await getSubCategories();
    setData(res.data.data);
  };

  const fetchCategories = async () => {
    const res = await getCategories();
    setCategories(res.data.data);
  };

  useEffect(() => {
    fetchData();
    fetchCategories();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this sub category?")) return;
    await deleteSubCategory(id);
    fetchData();
  };

  return (
    <div className="p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Service SubCategories</h2>
        <button
          onClick={() => {
            setEditData(null);
            setOpen(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          + Add SubCategory
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3">Image</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item._id} className="border-t">
                <td className="p-3">
                  <img
                    src={item.image}
                    className="w-14 h-14 rounded object-cover"
                  />
                </td>
                <td className="p-3 font-medium">{item.name}</td>
                <td className="p-3">
                  {item.category?.name || "-"}
                </td>
                <td className="p-3 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      item.status
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {item.status ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="p-3 flex gap-2 justify-center">
                  <button
                    onClick={() => {
                      setEditData(item);
                      setOpen(true);
                    }}
                    className="px-3 py-1 bg-yellow-500 text-white rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="px-3 py-1 bg-red-600 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* POPUP */}
      {open && (
        <SubCategoryForm
          onClose={() => setOpen(false)}
          refresh={fetchData}
          categories={categories}
          editData={editData}
        />
      )}
    </div>
  );
};

export default SubCategoryList;
