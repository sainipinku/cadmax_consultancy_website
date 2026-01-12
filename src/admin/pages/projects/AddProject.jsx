import { ArrowLeft, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../../../api/axios";

const AddProject = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    category: "MANORATE AND BOUNDARY CONSTRUCTION",
  });

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please upload project image");
      return;
    }

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("category", form.category);
    formData.append("image", image);

    try {
      setLoading(true);
      await API.post("/projects", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Project added successfully");
      navigate("/admin/projects");
    } catch (err) {
      console.error(err);
      alert("Failed to add project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800">
            Add New Project
          </h1>
          <p className="text-sm text-slate-500">
            Create a new project for the website
          </p>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
        >
          <ArrowLeft size={16} />
          Back
        </button>
      </div>

      {/* Form */}
      <div className="bg-white rounded-xl border shadow-sm p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Project title"
            className="w-full rounded-lg border px-4 py-2.5"
            required
          />

          {/* Category (ENUM FIXED) */}
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-2.5"
            required
          >
            <option>MANORATE AND BOUNDARY CONSTRUCTION</option>
            <option>ROAD NETWORK</option>
            <option>WATER SUPPLY</option>
            <option>ELECTRICITY</option>
          </select>

         

          {/* Image */}
          <label className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 cursor-pointer">
            <Upload />
            <span className="text-sm">
              {image ? image.name : "Click to upload image"}
            </span>
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>

          {/* Actions */}
          <div className="flex justify-end gap-3 border-t pt-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-5 py-2.5 border rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg"
            >
              {loading ? "Saving..." : "Save Project"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
