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
    icon: Users,
  },
  {
    title: "Active Projects",
    value: 13,
    icon: FolderKanban,
  },
  {
    title: "Job Openings",
    value: 8,
    icon: Briefcase,
  },
  {
    title: "Client Contacts",
    value: 45,
    icon: Phone,
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-8">
      
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-800">
          Dashboard
        </h1>
        <p className="text-sm text-slate-500">
          Cadmax Consultancy Overview
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-white border rounded-lg p-5 flex items-center gap-4"
            >
              <div className="w-11 h-11 flex items-center justify-center rounded-md bg-slate-100">
                <Icon className="w-5 h-5 text-slate-700" />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  {item.title}
                </p>
                <h2 className="text-xl font-semibold text-slate-800">
                  {item.value}
                </h2>
              </div>
            </div>
          );
        })}
      </div>

      {/* RECENT ACTIVITY */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* RECENT CONTACTS */}
        <div className="bg-white border rounded-lg p-6">
          <h3 className="text-base font-semibold text-slate-800 mb-4">
            Recent Client Contacts
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

        {/* RECENT PROJECTS */}
        <div className="bg-white border rounded-lg p-6">
          <h3 className="text-base font-semibold text-slate-800 mb-4">
            Recent Projects
          </h3>

          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex justify-between">
              <span>Boundary Construction</span>
              <span className="text-green-600 font-medium">Ongoing</span>
            </li>
            <li className="flex justify-between">
              <span>Road Network Planning</span>
              <span className="text-green-600 font-medium">Ongoing</span>
            </li>
            <li className="flex justify-between">
              <span>Water Supply Layout</span>
              <span className="text-slate-500 font-medium">Completed</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
