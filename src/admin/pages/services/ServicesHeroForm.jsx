import { Upload, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../../../api/axios";

const ServicesHeroForm = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("hero", image);

    await API.put("/services/home/hero", fd);
    navigate("/admin/services/home");
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2"
      >
        <ArrowLeft size={16} /> Back
      </button>

      <h1 className="text-2xl font-semibold">Update Services Hero</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded border space-y-4"
      >
        <label className="border-2 border-dashed rounded p-6 flex flex-col items-center cursor-pointer">
          <Upload />
          <span>{image ? image.name : "Upload hero image"}</span>
          <input
            hidden
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </label>

        <button className="px-6 py-2 bg-blue-600 text-white rounded">
          Save
        </button>
      </form>
    </div>
  );
};

export default ServicesHeroForm;
