import {
  Users,
  Briefcase,
  Phone,
  FolderKanban
} from "lucide-react";

const stats = [
  {
    title: "Team Members",
    value: 12,
    icon: <Users className="w-6 h-6 text-blue-600" />,
    bg: "bg-blue-50"
  },
  {
    title: "Total Jobs",
    value: 8,
    icon: <Briefcase className="w-6 h-6 text-green-600" />,
    bg: "bg-green-50"
  },
  {
    title: "Contacts",
    value: 45,
    icon: <Phone className="w-6 h-6 text-purple-600" />,
    bg: "bg-purple-50"
  },
  {
    title: "Projects",
    value: 6,
    icon: <FolderKanban className="w-6 h-6 text-orange-600" />,
    bg: "bg-orange-50"
  }
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-800">
          Dashboard Overview
        </h1>
        <p className="text-sm text-slate-500">
          Welcome back
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border p-5 flex items-center justify-between"
          >
            <div>
              <p className="text-sm text-slate-500">{item.title}</p>
              <h2 className="text-2xl font-bold text-slate-800">
                {item.value}
              </h2>
            </div>
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-lg ${item.bg}`}
            >
              {item.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Contacts */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">
            Recent Contacts
          </h3>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex justify-between">
              <span>Rahul Sharma</span>
              <span className="text-slate-400">Today</span>
            </li>
            <li className="flex justify-between">
              <span>Ankit Verma</span>
              <span className="text-slate-400">Yesterday</span>
            </li>
            <li className="flex justify-between">
              <span>Neha Singh</span>
              <span className="text-slate-400">2 days ago</span>
            </li>
          </ul>
        </div>

        {/* Recent Jobs */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">
            Recent Jobs
          </h3>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex justify-between">
              <span>Frontend Developer</span>
              <span className="text-green-600 font-medium">Active</span>
            </li>
            <li className="flex justify-between">
              <span>Backend Developer</span>
              <span className="text-green-600 font-medium">Active</span>
            </li>
            <li className="flex justify-between">
              <span>UI/UX Designer</span>
              <span className="text-red-500 font-medium">Closed</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
