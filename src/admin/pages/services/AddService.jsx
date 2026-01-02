import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../api/axios";

const AddService = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "engineering",
    type: "sub-service",
    thumbnail: null
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title || !form.thumbnail) {
      alert("Title & image required");
      return;
    }

    const data = new FormData();
    data.append("title", form.title);
    data.append("description", form.description);
    data.append("category", form.category);
    data.append("type", form.type);
    data.append("thumbnail", form.thumbnail);

    try {
      setLoading(true);
      await API.post("/admin/services", data);
      navigate("/admin/services");
    } catch (err) {
      console.log(err);
      alert("Failed to save");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl bg-white p-8 rounded-xl shadow-sm">
      <h1 className="text-xl font-semibold mb-6">Add Service</h1>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* CATEGORY */}
        <select
          className="w-full border rounded-lg p-3"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        >
          <option value="engineering">Engineering</option>
          <option value="surveying">Surveying</option>
          <option value="planning">Planning</option>
        </select>

        {/* TITLE */}
        <input
          type="text"
          placeholder="Service Title"
          className="w-full border rounded-lg p-3"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        {/* DESCRIPTION */}
        <textarea
          placeholder="Description"
          rows="4"
          className="w-full border rounded-lg p-3"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        {/* THUMBNAIL */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setForm({ ...form, thumbnail: e.target.files[0] })
          }
        />

        <button
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          {loading ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
};

export default AddService;
