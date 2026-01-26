import React, { useEffect, useState } from "react";
import API from "../../../api/axios";

const Inquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchInquiries = async () => {
    try {
      const res = await API.get("/inquiries");
      setInquiries(res.data);
    } catch (err) {
      console.error("Fetch inquiries failed", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  // Toggle status
  const toggleStatus = async (id, currentStatus) => {
    try {
      const newStatus =
        currentStatus === "unread" ? "read" : "unread";

      const res = await API.put(`/inquiries/${id}/status`, {
        status: newStatus,
      });

      setInquiries((prev) =>
        prev.map((inq) => (inq._id === id ? res.data : inq))
      );
    } catch (err) {
      console.error("Update status failed", err?.response?.data || err);
      alert("Status update failed ❌");
    }
  };

  const unreadCount = inquiries.filter(
    (i) => i.status === "unread"
  ).length;

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-6 w-48 bg-slate-200 rounded" />
          <div className="h-64 bg-slate-200 rounded" />
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-800">
          Inquiries
          {unreadCount > 0 && (
            <span className="ml-3 bg-red-600 text-white text-sm px-3 py-1 rounded-full">
              {unreadCount} Unread
            </span>
          )}
        </h2>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow border border-slate-200 overflow-hidden">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-100 text-slate-700">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Name</th>
              <th className="px-4 py-3 text-left font-semibold">Email</th>
              <th className="px-4 py-3 text-left font-semibold">Phone</th>
              <th className="px-4 py-3 text-left font-semibold">Message</th>
              <th className="px-4 py-3 text-left font-semibold">Status</th>
              <th className="px-4 py-3 text-left font-semibold">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {inquiries.map((inq) => (
              <tr
                key={inq._id}
                className={`${
                  inq.status === "unread"
                    ? "bg-red-50"
                    : "bg-white"
                } hover:bg-slate-50 transition`}
              >
                {/* NAME */}
                <td className="px-4 py-3 font-medium text-slate-800">
                  {inq.name}
                </td>

                {/* EMAIL */}
                <td className="px-4 py-3 text-slate-600">
                  {inq.email}
                </td>

                {/* PHONE */}
                <td className="px-4 py-3 text-slate-600">
                  {inq.phone || "-"}
                </td>

                {/* MESSAGE (SAFE + TRUNCATED) */}
                <td className="px-4 py-3 text-slate-700 max-w-xs">
                  <div
                    className="overflow-hidden text-ellipsis"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      wordBreak: "break-word",
                    }}
                    title={inq.message} // hover pe full msg
                  >
                    {inq.message}
                  </div>

                  {inq.message && inq.message.length > 80 && (
                    <button
                      onClick={() => alert(inq.message)}
                      className="mt-1 text-xs text-blue-600 hover:underline"
                    >
                      View full
                    </button>
                  )}
                </td>

                {/* STATUS */}
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                      inq.status === "unread"
                        ? "bg-red-100 text-red-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {inq.status.toUpperCase()}
                  </span>
                </td>

                {/* ACTION */}
                <td className="px-4 py-3">
                  <button
                    onClick={() =>
                      toggleStatus(inq._id, inq.status)
                    }
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                      inq.status === "unread"
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                    }`}
                  >
                    Mark as{" "}
                    {inq.status === "unread" ? "Read" : "Unread"}
                  </button>
                </td>
              </tr>
            ))}

            {inquiries.length === 0 && (
              <tr>
                <td
                  colSpan="6"
                  className="px-4 py-10 text-center text-slate-500"
                >
                  No inquiries found 🚫
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inquiries;
