import { useState, useRef, useEffect } from "react";
import { createCategory, updateCategory } from "../../api/category.api";

const CategoryForm = ({ editData, onClose, refresh }) => {
  const fileRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  /* ================= PREFILL ON EDIT ================= */
  useEffect(() => {
    if (editData) {
      setForm({
        name: editData.name || "",
        image: null,
      });
      setPreview(editData.image?.url || null);
    }
  }, [editData]);

  /* ================= IMAGE CHANGE ================= */
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setForm({ ...form, image: file });
    setPreview(URL.createObjectURL(file));
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 🚨 image required only on CREATE
      if (!editData && !form.image) {
        alert("Please select an image");
        return;
      }

      const fd = new FormData();
      fd.append("name", form.name);

      if (form.image) {
        fd.append("image", form.image);
      }

      if (editData) {
        await updateCategory(editData._id, fd);
      } else {
        await createCategory(fd);
      }

      // ✅ RESET
      setForm({ name: "", image: null });
      setPreview(null);
      if (fileRef.current) fileRef.current.value = "";

      refresh();
      onClose();
    } catch (err) {
      console.error("CATEGORY SAVE ERROR:", err.response?.data || err);
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">
          {editData ? "Edit" : "Add"} Category
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* NAME */}
          <input
            className="w-full border rounded px-3 py-2"
            placeholder="Section Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            required
          />

          {/* IMAGE PREVIEW */}
          {preview && (
            <div className="flex justify-center">
              <img
                src={preview}
                alt="Preview"
                className="h-24 w-24 object-cover rounded border"
              />
            </div>
          )}

          {/* IMAGE UPLOAD */}
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />

          {/* ACTIONS */}
          <div className="flex justify-end gap-3 pt-3">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              {editData ? "Update" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryForm;
