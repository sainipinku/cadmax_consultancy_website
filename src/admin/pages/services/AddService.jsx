import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../api/axios";

const AddService = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    image: null,
    pageType: "service1", // 👈 IMPORTANT
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title || !form.image) {
      alert("Title and Image are required");
      return;
    }

    try {
      setLoading(true);

      const data = new FormData();
      data.append("title", form.title);
      data.append("description", form.description);
      data.append("image", form.image);
      data.append("pageType", form.pageType); // 👈 SEND TO BACKEND

      
      await API.post("/services", data);


      navigate("/admin/services");
    } catch (error) {
      console.error(error);
      alert("Failed to add service");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl bg-white p-8 rounded-xl shadow-sm">
      <h1 className="text-xl font-semibold mb-6">Add Service</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* SERVICE PAGE */}
        <select
          className="w-full border rounded-lg p-3"
          value={form.pageType}
          onChange={(e) =>
            setForm({ ...form, pageType: e.target.value })
          }
        >
          <option value="service1">Service Page One</option>
          <option value="service2">Service Page Two</option>
          <option value="service3">Service Page Three</option>
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
          placeholder="Short Description"
          rows="4"
          className="w-full border rounded-lg p-3"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        {/* IMAGE */}
        <input
          type="file"
          accept="image/*"
          className="w-full"
          onChange={(e) =>
            setForm({ ...form, image: e.target.files[0] })
          }
        />

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg disabled:opacity-60"
          >
            {loading ? "Saving..." : "Save Service"}
          </button>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="border px-6 py-2 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
