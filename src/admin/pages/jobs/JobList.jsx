import { Plus, Pencil, Trash2 } from "lucide-react";

const jobs = [
  {
    title: "Frontend Developer",
    type: "Full Time",
    location: "Jaipur",
    status: "Active",
    date: "15 Sep 2024"
  },
  {
    title: "Backend Developer",
    type: "Part Time",
    location: "Remote",
    status: "Active",
    date: "10 Sep 2024"
  },
  {
    title: "UI/UX Designer",
    type: "Contract",
    location: "Delhi",
    status: "Closed",
    date: "05 Sep 2024"
  }
];

const JobList = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800">
            Job List
          </h1>
          <p className="text-sm text-slate-500">
            Manage job openings & vacancies
          </p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          <Plus size={18} />
          Add Job
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 text-slate-600">
            <tr>
              <th className="px-6 py-3 text-left font-medium">
                Job Title
              </th>
              <th className="px-6 py-3 text-left font-medium">
                Type
              </th>
              <th className="px-6 py-3 text-left font-medium">
                Location
              </th>
              <th className="px-6 py-3 text-left font-medium">
                Status
              </th>
              <th className="px-6 py-3 text-left font-medium">
                Posted On
              </th>
              <th className="px-6 py-3 text-center font-medium">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {jobs.map((job, index) => (
              <tr
                key={index}
                className="border-t hover:bg-slate-50"
              >
                <td className="px-6 py-4">
                  {job.title}
                </td>
                <td className="px-6 py-4">
                  {job.type}
                </td>
                <td className="px-6 py-4">
                  {job.location}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      job.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {job.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {job.date}
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center gap-3">
                    <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                      <Pencil size={16} />
                    </button>
                    <button className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobList;
