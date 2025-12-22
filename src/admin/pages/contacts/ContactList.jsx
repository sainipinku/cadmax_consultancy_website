import { Eye, Trash2 } from "lucide-react";

const contacts = [
  {
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "+91 98765 43210",
    date: "12 Sep 2024"
  },
  {
    name: "Ankit Verma",
    email: "ankit@gmail.com",
    phone: "+91 99887 66554",
    date: "10 Sep 2024"
  },
  {
    name: "Neha Singh",
    email: "neha@gmail.com",
    phone: "+91 91234 56789",
    date: "08 Sep 2024"
  }
];

const ContactList = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-800">
          Contact List
        </h1>
        <p className="text-sm text-slate-500">
          User inquiries & contact messages
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
                Date
              </th>
              <th className="px-6 py-3 text-center font-medium">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((contact, index) => (
              <tr
                key={index}
                className="border-t hover:bg-slate-50"
              >
                <td className="px-6 py-4">
                  {contact.name}
                </td>
                <td className="px-6 py-4">
                  {contact.email}
                </td>
                <td className="px-6 py-4">
                  {contact.phone}
                </td>
                <td className="px-6 py-4">
                  {contact.date}
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

export default ContactList;
