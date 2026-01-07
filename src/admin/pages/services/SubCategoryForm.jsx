import { useState } from "react";
import {
  addSubCategory,
  updateSubCategory,
} from "../../api/subCategory.api";

const SubCategoryForm = ({
  onClose,
  refresh,
  categories,
  editData,
}) => {
  const [form, setForm] = useState({
    name: editData?.name || "",
    description: editData?.description || "",
    category: editData?.category?._id || "",
    status: editData?.status ?? true,
    image: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("name", form.name);
    fd.append("description", form.description);
    fd.append("category", form.category);
    fd.append("status", form.status);
    if (form.image) fd.append("image", form.image);

    if (editData) {
      await updateSubCategory(editData._id, fd);
    } else {
      await addSubCategory(fd);
    }

    refresh();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4">
          {editData ? "Edit SubCategory" : "Add SubCategory"}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* NAME */}
          <input
            type="text"
            placeholder="SubCategory Name"
            className="w-full border px-3 py-2 rounded"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            required
          />

          {/* CATEGORY DROPDOWN */}
          <select
            className="w-full border px-3 py-2 rounded"
            value={form.category}
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>

          {/* DESCRIPTION */}
          <textarea
            placeholder="Description"
            className="w-full border px-3 py-2 rounded"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />

          {/* IMAGE */}
          <input
            type="file"
            onChange={(e) =>
              setForm({ ...form, image: e.target.files[0] })
            }
          />

          {/* STATUS */}
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={form.status}
              onChange={(e) =>
                setForm({ ...form, status: e.target.checked })
              }
            />
            Active
          </label>

          {/* ACTIONS */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubCategoryForm;
