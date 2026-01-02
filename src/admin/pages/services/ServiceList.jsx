import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../../api/axios";

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  const fetchServices = async () => {
    try {
      const res = await API.get("/admin/services");
      setServices(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to load services");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this service?")) return;

    try {
      await API.delete(`/admin/services/${id}`);
      fetchServices();
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const filteredServices =
    filter === "all"
      ? services
      : services.filter((s) => s.category === filter);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold">Services</h1>

        <Link
          to="/admin/services/add"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          + Add Service
        </Link>
      </div>

      {/* FILTER */}
      <div className="mb-4">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded-lg px-3 py-2"
        >
          <option value="all">All Categories</option>
          <option value="engineering">Engineering</option>
          <option value="surveying">Surveying</option>
          <option value="planning">Planning</option>
        </select>
      </div>

      {/* TABLE */}
      {loading ? (
        <p>Loading...</p>
      ) : filteredServices.length === 0 ? (
        <p className="text-gray-500">No services found</p>
      ) : (
        <table className="w-full border">
          <thead className="bg-slate-100 text-left">
            <tr>
              <th className="p-3 border">Image</th>
              <th className="p-3 border">Title</th>
              <th className="p-3 border">Category</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredServices.map((service) => (
              <tr key={service._id} className="border-t">
                <td className="p-3 border">
                  <img
                    src={service.thumbnail?.url}
                    alt={service.title}
                    className="w-20 h-14 object-cover rounded"
                  />
                </td>

                <td className="p-3 border font-medium">
                  {service.title}
                </td>

                <td className="p-3 border capitalize">
                  {service.category}
                </td>

                <td className="p-3 border space-x-4">
                  <Link
                    to={`/admin/services/edit/${service._id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => handleDelete(service._id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ServiceList;
