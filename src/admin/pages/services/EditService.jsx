import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../../api/axios";

const EditService = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: null,
  });

  const [preview, setPreview] = useState("");

  /* ---------------- FETCH SERVICE ---------------- */
  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await API.get(`/services/${id}`);

        setForm({
          title: res.data.title || "",
          description: res.data.description || "",
          image: null,
        });

        // ✅ CLOUDINARY IMAGE
        if (res.data.thumbnail?.url) {
          setPreview(res.data.thumbnail.url);
        }

        setLoading(false);
      } catch (error) {
        console.error(error);
        alert("Failed to load service");
      }
    };

    fetchService();
  }, [id]);

  /* ---------------- IMAGE CHANGE ---------------- */
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, image: file });

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  /* ---------------- UPDATE SERVICE ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("title", form.title);
      data.append("description", form.description);

      if (form.image) {
        data.append("image", form.image);
      }

      await API.put(`/admin/services/${id}`, data);

      navigate("/admin/services");
    } catch (error) {
      console.error(error);
      alert("Service update failed");
    }
  };

  if (loading) {
    return (
      <p className="text-slate-500 text-center py-10">
        Loading service...
      </p>
    );
  }

  return (
    <div className="max-w-3xl bg-white p-8 rounded-xl shadow-sm">
      <h1 className="text-xl font-semibold mb-6">Edit Service</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* TITLE */}
        <input
          type="text"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
          className="w-full border rounded-lg p-3"
          placeholder="Service Title"
          required
        />

        {/* DESCRIPTION */}
        <textarea
          rows="4"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
          className="w-full border rounded-lg p-3"
          placeholder="Short Description"
          required
        />

        {/* IMAGE */}
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
            accept="image/*"
          />
        </div>

        {/* BUTTONS */}
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
