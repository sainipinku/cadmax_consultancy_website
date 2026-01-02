import { useEffect, useState } from "react";
import { ArrowLeft, Upload } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../../api/axios";

const ServicesHomeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    slug: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (id) fetchCategory();
  }, [id]);

  const fetchCategory = async () => {
    const res = await API.get(`/services/home/category/${id}`);
    setForm({ title: res.data.title, slug: res.data.slug });
    setPreview(res.data.image);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("title", form.title);
    fd.append("slug", form.slug);
    if (image) fd.append("image", image);

    if (id) {
      await API.put(`/services/home/category/${id}`, fd);
    } else {
      await API.post("/services/home/category", fd);
    }

    navigate("/admin/services/home");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm"
      >
        <ArrowLeft size={16} /> Back
      </button>

      <h1 className="text-2xl font-semibold">
        {id ? "Edit Category" : "Add Category"}
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded border space-y-5"
      >
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
          className="w-full border px-4 py-2 rounded"
          required
        />

        <input
          placeholder="Slug (engineering)"
          value={form.slug}
          onChange={(e) =>
            setForm({ ...form, slug: e.target.value })
          }
          className="w-full border px-4 py-2 rounded"
          required
        />

        {preview && (
          <img src={preview} className="w-64 rounded border" />
        )}

        <label className="border-2 border-dashed rounded p-6 flex flex-col items-center cursor-pointer">
          <Upload />
          <span className="text-sm">
            {image ? image.name : "Upload image"}
          </span>
          <input
            hidden
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>

        <button className="px-6 py-2 bg-blue-600 text-white rounded">
          Save
        </button>
      </form>
    </div>
  );
};

export default ServicesHomeForm;
