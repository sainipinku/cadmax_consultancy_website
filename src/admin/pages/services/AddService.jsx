import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddService = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    image: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // const data = new FormData();
    // data.append("title", form.title);
    // data.append("description", form.description);
    // data.append("image", form.image);

    // API.post("/services", data)

    console.log(form);
    navigate("/admin/services");
  };

  return (
    <div className="max-w-3xl bg-white p-8 rounded-xl shadow-sm">
      <h1 className="text-xl font-semibold mb-6">Add Service</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          placeholder="Service Title"
          className="w-full border rounded-lg p-3"
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <textarea
          placeholder="Short Description"
          rows="4"
          className="w-full border rounded-lg p-3"
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <input
          type="file"
          className="w-full"
          onChange={(e) =>
            setForm({ ...form, image: e.target.files[0] })
          }
        />

        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Save Service
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
