import { useEffect, useState } from "react";
import { Pencil, Trash2, Plus, Eye, X } from "lucide-react";
import API from "../../../api/axios";
import { useNavigate } from "react-router-dom";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [preview, setPreview] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await API.get("/projects");
      setProjects(res.data || []);
    } catch (err) {
      console.error(err);
      alert("Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this project?")) return;

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
    <>
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Projects</h1>
          <p className="text-sm text-slate-500">
            Manage all website projects
          </p>
        </div>

        <button
          onClick={() => navigate("/admin/projects/add")}
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg"
        >
          <Plus size={16} />
          Add Project
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100 text-slate-700">
            <tr>
              <th className="p-4 text-left w-[20%]">Project</th>
              <th className="p-4 text-left w-[30%]">Title</th>
              <th className="p-4 text-left w-[25%]">Category</th>
              <th className="p-4 text-right w-[25%]">Actions</th>
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
              <tr key={item._id} className="border-t align-middle">
                {/* PROJECT IMAGE */}
                <td className="p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-28 h-20 object-cover rounded-lg border"
                  />
                </td>

                {/* TITLE COLUMN */}
                <td className="p-4">
                  <p className="font-semibold text-slate-800">
                    {item.title}
                  </p>
                </td>

                {/* CATEGORY */}
                <td className="p-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                    {item.category}
                  </span>
                </td>

                {/* ACTIONS */}
                <td className="p-4">
                  <div className="flex justify-end gap-4">
                    <button
                      onClick={() => setPreview(item)}
                      title="Preview"
                      className="text-slate-600 hover:text-black"
                    >
                      <Eye size={18} />
                    </button>

                    <button
                      onClick={() =>
                        navigate(`/admin/projects/edit/${item._id}`)
                      }
                      title="Edit"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() => handleDelete(item._id)}
                      title="Delete"
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PREVIEW MODAL */}
      {preview && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl max-w-xl w-full p-6 relative">
            <button
              onClick={() => setPreview(null)}
              className="absolute top-4 right-4 text-slate-500 hover:text-black"
            >
              <X />
            </button>

            <img
              src={preview.image}
              alt={preview.title}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />

            <h2 className="text-xl font-semibold">
              {preview.title}
            </h2>

            <span className="inline-block mt-3 px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
              {preview.category}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectList;
