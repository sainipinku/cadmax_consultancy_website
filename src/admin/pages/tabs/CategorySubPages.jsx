import { useEffect, useState } from "react";
import API from "../../../api/axios";

const CategorySubPages = ({ category }) => {
  const [pages, setPages] = useState([]);

  const load = () => {
    API.get(`/services/subpages/${category}`)
      .then(res => setPages(res.data));
  };

  useEffect(load, [category]);

  const del = async (id) => {
    if (!window.confirm("Delete page?")) return;
    await API.delete(`/services/admin/subpages/${id}`);
    load();
  };

  return (
    <div>
      <button className="bg-green-600 text-white px-4 py-2 rounded mb-4">
        + Add Sub Page
      </button>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Title</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {pages.map(p => (
            <tr key={p._id} className="border-t">
              <td className="p-3 font-semibold">{p.title}</td>
              <td className="p-3 space-x-4">
                <button className="text-blue-600">Edit</button>
                <button
                  onClick={() => del(p._id)}
                  className="text-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategorySubPages;
