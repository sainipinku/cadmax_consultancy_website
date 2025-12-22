import { Plus, Pencil } from "lucide-react";

const teamMembers = [
  {
    name: "Rahul Sharma",
    role: "Architect",
    email: "rahul@cadmax.com",
    image: "https://i.pravatar.cc/150?img=11"
  },
  {
    name: "Ankit Verma",
    role: "Civil Engineer",
    email: "ankit@cadmax.com",
    image: "https://i.pravatar.cc/150?img=12"
  },
  {
    name: "Neha Singh",
    role: "Interior Designer",
    email: "neha@cadmax.com",
    image: "https://i.pravatar.cc/150?img=13"
  }
];

const AddTeamMember = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800">
            Team Members
          </h1>
          <p className="text-sm text-slate-500">
            Manage your team members
          </p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          <Plus size={18} />
          Add Member
        </button>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border p-5 relative"
          >
            {/* Edit Button */}
            <button className="absolute top-3 right-3 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              <Pencil size={16} />
            </button>

            {/* Profile */}
            <div className="flex items-center gap-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-14 h-14 rounded-full object-cover"
              />

              <div>
                <h2 className="font-semibold text-slate-800">
                  {member.name}
                </h2>
                <p className="text-sm text-slate-500">
                  {member.role}
                </p>
              </div>
            </div>

            {/* Info */}
            <div className="mt-4 text-sm text-slate-600">
              <p>
                <span className="font-medium">Email:</span>{" "}
                {member.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddTeamMember;
