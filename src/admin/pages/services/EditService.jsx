import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditService = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: null
  });

  const [preview, setPreview] = useState("");

  /* ---------------- FETCH SERVICE ---------------- */
  useEffect(() => {
    // API.get(`/services/${id}`)
    setTimeout(() => {
      // mock data
      const data = {
        title: "Architectural Design",
        description:
          "Innovative architectural planning with modern aesthetics.",
        image:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e"
      };

      setForm({
        title: data.title,
        description: data.description,
        image: null
      });

      setPreview(data.image);
      setLoading(false);
    }, 500);
  }, [id]);

  /* ---------------- IMAGE CHANGE ---------------- */
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, image: file });

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  /* ---------------- UPDATE ---------------- */
  const handleSubmit = (e) => {
    e.preventDefault();

    // const data = new FormData();
    // data.append("title", form.title);
    // data.append("description", form.description);
    // if (form.image) data.append("image", form.image);

    // API.put(`/services/${id}`, data)

    console.log("Updated:", form);
    navigate("/admin/services");
  };

  if (loading) {
    return <p className="text-slate-500">Loading service...</p>;
  }

  return (
    <div className="max-w-3xl bg-white p-8 rounded-xl shadow-sm">
      <h1 className="text-xl font-semibold mb-6">
        Edit Service
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <input
          type="text"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
          className="w-full border rounded-lg p-3"
          placeholder="Service Title"
        />

        {/* Description */}
        <textarea
          rows="4"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
          className="w-full border rounded-lg p-3"
          placeholder="Short Description"
        />

        {/* Image */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-slate-700">
            Service Image
          </p>

          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="w-full h-52 object-cover rounded-lg border"
            />
          )}

          <input
            type="file"
            onChange={handleImageChange}
            className="w-full"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Update Service
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

export default EditService;
