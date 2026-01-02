import { useEffect, useState } from "react";
import API from "../../../api/axios";

const CategoryMainPage = ({ category }) => {
  const [form, setForm] = useState({
    heroImage: "", 
    heading: "",
    description: "",
    overlapImage: "",
  });

  useEffect(() => {
    API.get(`/services/main/${category}`).then(res => {
      if (res.data) setForm(res.data);
    });
  }, [category]);

  const save = async () => {
    await API.put(`/services/admin/main/${category}`, form);
    alert("Main page updated");
  };

  return (
    <div className="space-y-4">
      <input
        className="border p-3 w-full"
        placeholder="Hero Image URL"
        value={form.heroImage}
        onChange={e => setForm({ ...form, heroImage: e.target.value })}
      />

      <input
        className="border p-3 w-full"
        placeholder="Heading"
        value={form.heading}
        onChange={e => setForm({ ...form, heading: e.target.value })}
      />

      <textarea
        className="border p-3 w-full"
        rows="4"
        placeholder="Description"
        value={form.description}
        onChange={e => setForm({ ...form, description: e.target.value })}
      />

      <input
        className="border p-3 w-full"
        placeholder="Overlap Image URL"
        value={form.overlapImage}
        onChange={e => setForm({ ...form, overlapImage: e.target.value })}
      />

      <button
        onClick={save}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg"
      >
        Save Main Page
      </button>
    </div>
  );
};

export default CategoryMainPage;
