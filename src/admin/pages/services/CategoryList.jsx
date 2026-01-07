import { useEffect, useState } from "react";
import {
  getCategories,
  deleteCategory,
} from "../../api/category.api";
import CategoryForm from "./CategoryForm";

const CategoryList = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const loadData = async () => {
    const res = await getCategories();
    setData(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Delete this category?")) {
      await deleteCategory(id);
      loadData();
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold">Categories</h2>
        <button
          onClick={() => {
            setEditData(null);
            setOpen(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Category
        </button>
      </div>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th>Image</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item._id} className="border-t text-center">
              <td className="p-2">
                {item.image?.url ? (
                  <img
                    src={item.image.url}
                    alt={item.name}
                    className="h-12 mx-auto object-cover rounded"
                  />
                ) : (
                  "No Image"
                )}
              </td>

              <td>{item.name}</td>

              <td className="space-x-3">
                <button
                  onClick={() => {
                    setEditData(item);
                    setOpen(true);
                  }}
                  className="text-blue-600"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(item._id)}
                  className="text-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {open && (
        <CategoryForm
          editData={editData}
          onClose={() => setOpen(false)}
          refresh={loadData}
        />
      )}
    </div>
  );
};

export default CategoryList;
