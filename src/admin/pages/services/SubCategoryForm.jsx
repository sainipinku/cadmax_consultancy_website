import { useState } from "react";
import {
  addSubCategory,
  updateSubCategory,
} from "../../api/subCategory.api";

const SubCategoryForm = ({ onClose, refresh, editData }) => {
  const [form, setForm] = useState({
    service: "",
    sectionType: "",
    title: "",
    link: "",
    image: null,
    status: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("service", form.service);        // engineering
    fd.append("sectionType", form.sectionType); // hero / overlap / collage
    fd.append("title", form.title);
    fd.append("link", form.link);
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
          Add Service Content
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* SERVICE SELECT */}
          <select
            className="w-full border px-3 py-2 rounded"
            value={form.service}
            onChange={(e) =>
              setForm({ ...form, service: e.target.value })
            }
            required
          >
            <option value="">Select Service</option>
            <option value="engineering">Engineering</option>
            <option value="surveying">Surveying</option>
            <option value="planning">Planning</option>
          </select>

          {/* SECTION TYPE */}
          {form.service && (
            <select
              className="w-full border px-3 py-2 rounded"
              value={form.sectionType}
              onChange={(e) =>
                setForm({ ...form, sectionType: e.target.value })
              }
              required
            >
              <option value="">Select Section</option>
              <option value="hero">Hero Image</option>
              <option value="overlap">Overlap Image</option>
              <option value="collage">Collage Image</option>
            </select>
          )}

          {/* COLLAGE EXTRA FIELDS */}
          {form.sectionType === "collage" && (
            <>
              <input
                type="text"
                placeholder="Image Title"
                className="w-full border px-3 py-2 rounded"
                value={form.title}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
                required
              />

              <input
                type="text"
                placeholder="Page Link ( /services/maingate )"
                className="w-full border px-3 py-2 rounded"
                value={form.link}
                onChange={(e) =>
                  setForm({ ...form, link: e.target.value })
                }
                required
              />
            </>
          )}

          {/* IMAGE */}
          <input
            type="file"
            required
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
