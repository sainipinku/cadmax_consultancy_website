import { Eye, Trash2 } from "lucide-react";

const careers = [
  {
    name: "Amit Kumar",
    email: "amit@gmail.com",
    phone: "+91 98765 43210",
    position: "Frontend Developer",
    date: "14 Sep 2024",
    resume: "View"
  },
  {
    name: "Pooja Sharma",
    email: "pooja@gmail.com",
    phone: "+91 99887 66554",
    position: "UI/UX Designer",
    date: "11 Sep 2024",
    resume: "View"
  },
  {
    name: "Rohit saini",
    email: "rohit@gmail.com",
    phone: "+91 91234 56789",
    position: "Backend Developer",
    date: "07 Sep 2024",
    resume: "View"
  }
];

const CareerList = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-800">
          Career Applications
        </h1>
        <p className="text-sm text-slate-500">
          Manage job applications from candidates
        </p>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 text-slate-600">
            <tr>
              <th className="px-6 py-3 text-left font-medium">
                Name
              </th>
              <th className="px-6 py-3 text-left font-medium">
                Email
              </th>
              <th className="px-6 py-3 text-left font-medium">
                Phone
              </th>
              <th className="px-6 py-3 text-left font-medium">
                Position
              </th>
              <th className="px-6 py-3 text-left font-medium">
                Applied On
              </th>
              <th className="px-6 py-3 text-center font-medium">
                Resume
              </th>
              <th className="px-6 py-3 text-center font-medium">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {careers.map((career, index) => (
              <tr
                key={index}
                className="border-t hover:bg-slate-50"
              >
                <td className="px-6 py-4">
                  {career.name}
                </td>
                <td className="px-6 py-4">
                  {career.email}
                </td>
                <td className="px-6 py-4">
                  {career.phone}
                </td>
                <td className="px-6 py-4">
                  {career.position}
                </td>
                <td className="px-6 py-4">
                  {career.date}
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="text-blue-600 hover:underline">
                    View
                  </button>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center gap-3">
                    <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                      <Eye size={16} />
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

export default CareerList;
