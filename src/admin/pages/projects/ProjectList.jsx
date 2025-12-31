import { useEffect, useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import API from "../../../api/axios";
import { useNavigate } from "react-router-dom";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await API.get("/projects");
      setProjects(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this project?");
    if (!confirm) return;

    try {
      await API.delete(`/projects/${id}`);
      setProjects((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete project");
    }
  };

  if (loading) return <p>Loading projects...</p>;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <button
          onClick={() => navigate("/admin/projects/add")}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          <Plus size={16} />
          Add Project
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr className="text-left text-sm text-slate-600">
              <th className="p-4">Image</th>
              <th>Title</th>
              <th>Category</th>
              <th className="text-right p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {projects.length === 0 && (
              <tr>
                <td colSpan="4" className="p-6 text-center text-slate-500">
                  No projects found
                </td>
              </tr>
            )}

            {projects.map((item) => (
              <tr key={item._id} className="border-t">
                <td className="p-4">
                  <img
                    src={`http://localhost:5000${item.image}`}
                    alt={item.title}
                    className="w-20 h-14 object-cover rounded"
                  />
                </td>

                <td className="font-medium">{item.title}</td>

                <td className="text-sm text-slate-600">{item.category}</td>

                <td className="p-4 text-right flex justify-end gap-3">
                  <button
                    onClick={() =>
                      navigate(`/admin/projects/edit/${item._id}`)
                    }
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Pencil size={16} />
                  </button>

                  <button
                    onClick={() => handleDelete(item._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectList;
