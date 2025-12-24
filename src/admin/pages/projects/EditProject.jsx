import { ArrowLeft, Upload, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EditProject = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold text-slate-800">
            Edit Project
          </h1>
          <p className="text-sm text-slate-500">
            Update project details and image
          </p>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
        >
          <ArrowLeft size={16} />
          Back
        </button>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-xl border shadow-sm p-6">
        <form className="space-y-6">
          {/* Project Title */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Project Title
            </label>
            <input
              type="text"
              defaultValue="Cadmax Group Headoffice"
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Client & Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Client Name
              </label>
              <input
                type="text"
                defaultValue="Mr. Hanuman S & Mr. Ramesh Sharma"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Category
              </label>
              <input
                type="text"
                defaultValue="Interior Design"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Project Description
            </label>
            <textarea
              rows="4"
              defaultValue="This project stands as a remarkable architectural statement, designed with precision and elegance."
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {/* Current Image */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-slate-700">
              Current Image
            </label>

            <div className="relative w-full max-w-md">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Project"
                className="rounded-lg border object-cover"
              />

              <button
                type="button"
                className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
                title="Remove image"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>

          {/* Replace Image */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Replace Image
            </label>

            <label className="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 rounded-lg p-6 cursor-pointer hover:border-blue-500 transition">
              <Upload className="text-slate-400 mb-2" />
              <span className="text-sm text-slate-600">
                Click to upload new image
              </span>
              <span className="text-xs text-slate-400 mt-1">
                PNG, JPG up to 5MB
              </span>
              <input type="file" className="hidden" />
            </label>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Update Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProject;
