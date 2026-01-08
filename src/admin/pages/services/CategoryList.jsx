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
  const [preview, setPreview] = useState(null);

  const loadData = async () => {
    const res = await getCategories();
    setData(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this category?")) return;
    await deleteCategory(id);
    loadData();
  };

  return (
    <div className="p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Categories</h2>
        <button
          onClick={() => {
            setEditData(null);
            setOpen(true);
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          + Add Category
        </button>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="w-32 px-4 py-3 text-center">Image</th>
              <th className="px-4 py-3 text-center">Category Name</th>
              <th className="w-32 px-4 py-3 text-center">Status</th>
              <th className="w-48 px-4 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr
                key={item._id}
                className="border-t h-20 hover:bg-gray-50"
              >
                {/* IMAGE */}
                <td className="px-4 text-center">
                  <div className="w-14 h-14 mx-auto rounded overflow-hidden bg-gray-100 flex items-center justify-center">
                    {item.image?.url ? (
                      <img
                        src={item.image.url}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-xs text-gray-400">
                        No Image
                      </span>
                    )}
                  </div>
                </td>

                {/* NAME */}
                <td className="px-4 font-semibold text-gray-800 text-center">
                  {item.name}
                </td>

                {/* STATUS (ONLY ACTIVE SHOW) */}
                <td className="px-4 text-center">
  {(item.status === true || item.status === undefined) && (
    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
      Active
    </span>
  )}
</td>


                {/* ACTION */}
                <td className="px-4">
                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={() => setPreview(item)}
                      className="px-3 py-1 rounded bg-gray-100 text-gray-700 hover:bg-gray-200"
                    >
                      Preview
                    </button>

                    <button
                      onClick={() => {
                        setEditData(item);
                        setOpen(true);
                      }}
                      className="px-3 py-1 rounded bg-blue-100 text-blue-600 hover:bg-blue-200"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(item._id)}
                      className="px-3 py-1 rounded bg-red-100 text-red-600 hover:bg-red-200"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {data.length === 0 && (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-6 text-gray-400"
                >
                  No categories found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* FORM MODAL */}
      {open && (
        <CategoryForm
          editData={editData}
          onClose={() => setOpen(false)}
          refresh={loadData}
        />
      )}

      {/* PREVIEW MODAL */}
      {preview && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-sm rounded-xl p-6 relative">
            <button
              onClick={() => setPreview(null)}
              className="absolute top-3 right-3 text-xl"
            >
              ✕
            </button>

            {preview.image?.url && (
              <img
                src={preview.image.url}
                alt={preview.name}
                className="w-full h-48 object-cover rounded"
              />
            )}

            <h3 className="text-lg font-semibold mt-4 text-center">
              {preview.name}
            </h3>

            {preview.status && (
              <div className="text-center mt-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                  Active
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryList;
