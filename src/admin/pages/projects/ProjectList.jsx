import { Plus, Pencil, Trash2 } from "lucide-react";

const projects = [
  {
    title: "Cadmax Group Headoffice",
    client: "Mr. Hanuman S & Mr. Ramesh Sharma",
    category: "Interior Design",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
  },
  {
    title: "Riyasat Sankalp",
    client: "Riyasat Infra Developers",
    category: "Urban Planning",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471"
  },
  {
    title: "Rudra Mahal",
    client: "Jugal Kishore Meena",
    category: "Architecture",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
  },
  {
    title: "Kedia’s Landmark",
    client: "Kedia Bdl",
    category: "Urban Planning",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
  }
];

const ProjectList = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-slate-800">
          Project Listing
        </h1>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          <Plus size={18} />
          Add Project
        </button>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border overflow-hidden relative"
          >
            {/* Action Buttons */}
            <div className="absolute top-3 right-3 flex gap-2 z-10">
              <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                <Pencil size={16} />
              </button>
              <button className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700">
                <Trash2 size={16} />
              </button>
            </div>

            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-5 space-y-2">
              <h2 className="text-lg font-semibold text-slate-800">
                {project.title}
              </h2>

              <p className="text-sm text-slate-600">
                <span className="font-medium">Client:</span>{" "}
                {project.client}
              </p>

              <p className="text-sm text-slate-600">
                <span className="font-medium">Category:</span>{" "}
                {project.category}
              </p>

              <p className="text-sm text-slate-500 line-clamp-2">
                This project stands as a remarkable architectural statement,
                meticulously designed with attention to detail and elegance.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
