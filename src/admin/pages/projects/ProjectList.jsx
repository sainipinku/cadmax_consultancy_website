import { Plus, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
// import API from "../../api/axios"; // later

const projects = [
  {
    _id: "1",
    title: "Cadmax Group Headoffice",
    client: "Mr. Hanuman S & Mr. Ramesh Sharma",
    category: "Interior Design",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
  },
  {
    _id: "2",
    title: "Riyasat Sankalp",
    client: "Riyasat Infra Developers",
    category: "Urban Planning",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471"
  }
];

const ProjectList = () => {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmDelete) return;

    // API.delete(`/projects/${id}`)
    //   .then(() => fetchProjects());

    console.log("Deleted project id:", id);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800">
            Projects
          </h1>
          <p className="text-sm text-slate-500">
            Manage all your architectural and planning projects
          </p>
        </div>

        <button
          onClick={() => navigate("/admin/projects/add")}
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition shadow-sm"
        >
          <Plus size={18} />
          Add Project
        </button>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project._id}
            className="group bg-white rounded-xl border shadow-sm hover:shadow-md transition overflow-hidden"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              {/* Overlay Actions */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-start justify-end p-3 gap-2">
                <button
                  title="Edit Project"
                  onClick={() =>
                    navigate(`/admin/projects/edit/${project._id}`)
                  }
                  className="p-2 bg-white text-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition"
                >
                  <Pencil size={16} />
                </button>

                <button
                  title="Delete Project"
                  onClick={() => handleDelete(project._id)}
                  className="p-2 bg-white text-slate-800 rounded-full hover:bg-red-600 hover:text-white transition"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
              <h2 className="text-lg font-semibold text-slate-800">
                {project.title}
              </h2>

              <div className="text-sm text-slate-600 space-y-1">
                <p>
                  <span className="font-medium">Client:</span>{" "}
                  {project.client}
                </p>
                <p>
                  <span className="font-medium">Category:</span>{" "}
                  {project.category}
                </p>
              </div>

              <p className="text-sm text-slate-500 line-clamp-2">
                This project stands as a remarkable architectural
                statement with modern aesthetics.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
