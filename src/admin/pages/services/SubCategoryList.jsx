import { useEffect, useState } from "react";
import {
  getSubCategories,
  deleteSubCategory,
} from "../../api/subCategory.api";
import SubCategoryForm from "./SubCategoryForm";

const SubCategoryList = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [preview, setPreview] = useState(null);

  const fetchData = async () => {
    const res = await getSubCategories();
    setData(res.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this item?")) return;
    await deleteSubCategory(id);
    fetchData();
  };

  return (
    <div className="p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Service Content</h2>
        <button
          onClick={() => {
            setEditData(null);
            setOpen(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          + Add Content
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3">Image</th>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Service</th>
              <th className="p-3 text-left">Section</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item._id} className="border-t">
                <td className="p-3">
                  <img
                    src={item.image?.url}
                    className="w-16 h-16 rounded object-cover"
                    alt=""
                  />
                </td>

                <td className="p-3 font-medium">
                  {item.title || "-"}
                </td>

                <td className="p-3 capitalize">
                  {item.service}
                </td>

                <td className="p-3 capitalize">
                  {item.sectionType}
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
                    onClick={() => setPreview(item)}
                    className="px-3 py-1 bg-slate-700 text-white rounded"
                  >
                    Preview
                  </button>

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

      {/* FORM POPUP */}
      {open && (
        <SubCategoryForm
          onClose={() => setOpen(false)}
          refresh={fetchData}
          editData={editData}
        />
      )}

      {/* PREVIEW MODAL */}
      {preview && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white max-w-md w-full rounded-xl p-6 relative">
            <button
              onClick={() => setPreview(null)}
              className="absolute top-3 right-3 text-xl"
            >
              ✕
            </button>

            <img
              src={preview.image?.url}
              className="w-full h-56 object-cover rounded"
              alt=""
            />

            <div className="mt-4 space-y-2">
              <h3 className="text-xl font-bold">
                {preview.title || "No Title"}
              </h3>

              <p className="text-sm">
                <b>Service:</b> {preview.service}
              </p>

              <p className="text-sm">
                <b>Section:</b> {preview.sectionType}
              </p>

              {preview.link && (
                <p className="text-sm">
                  <b>Link:</b> {preview.link}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubCategoryList;
