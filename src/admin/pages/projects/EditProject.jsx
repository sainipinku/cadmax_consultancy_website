import { ArrowLeft, Upload} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../../../api/axios";

const CATEGORIES = [
  "MANORATE AND BOUNDARY CONSTRUCTION",
  "ROAD NETWORK",
  "WATER SUPPLY",
  "ELECTRICITY",
];

const EditProject = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
  });

  const [currentImage, setCurrentImage] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH PROJECT ================= */
  useEffect(() => {
    fetchProject();
    // eslint-disable-next-line
  }, []);

  const fetchProject = async () => {
    try {
      const res = await API.get(`/projects`);
      const project = res.data.find((p) => p._id === id);

      if (!project) {
        alert("Project not found");
        return navigate("/admin/projects");
      }

      setForm({
        title: project.title,
        category: project.category,
        description: project.description,
      });

      setCurrentImage(project.image);
    } catch (err) {
      console.error(err);
      alert("Failed to load project");
    } finally {
      setLoading(false);
    }
  };

  /* ================= CHANGE ================= */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("category", form.category);
    formData.append("description", form.description);

    if (newImage) {
      formData.append("image", newImage);
    }

    try {
      await API.put(`/projects/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      navigate("/admin/projects");
    } catch (err) {
      console.error(err);
      alert("Failed to update project");
    }
  };

  if (loading) return <p>Loading project...</p>;

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800">
            Edit Project
          </h1>
          <p className="text-sm text-slate-500">
            Update project details and image
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

          {/* Category */}
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-2.5"
            required
          >
            <option value="">Select category</option>
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* Description */}
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="4"
            placeholder="Project description"
            className="w-full rounded-lg border px-4 py-2.5"
          />

          {/* Current Image */}
          {currentImage && (
            <div>
              <label className="block text-sm font-medium mb-2">
                Current Image
              </label>
              <img
                src={`http://localhost:5000${currentImage}`}
                alt="Project"
                className="w-full max-w-md rounded border object-cover"
              />
            </div>
          )}

          {/* Replace Image */}
          <label className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 cursor-pointer">
            <Upload />
            <span className="text-sm">Replace image</span>
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={(e) => setNewImage(e.target.files[0])}
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
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg"
            >
              Update Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProject;
