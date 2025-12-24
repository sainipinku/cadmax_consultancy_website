import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import API from "../../../api/axios";


const ServiceList = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ---------------- FETCH SERVICES ---------------- */
  const fetchServices = async () => {
    try {
      const res = await API.get("/services");
      setServices(res.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load services");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  /* ---------------- DELETE ---------------- */
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this service?")) return;

    try {
      await API.delete(`/services/${id}`);
      setServices((prev) => prev.filter((s) => s._id !== id));
    } catch (error) {
      alert("Delete failed");
    }
  };

  if (loading) {
    return <p className="text-slate-500">Loading services...</p>;
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800">
            Services
          </h1>
          <p className="text-sm text-slate-500">
            Manage all services displayed on website
          </p>
        </div>

        <button
          onClick={() => navigate("/admin/services/add")}
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus size={18} />
          Add Service
        </button>
      </div>

      {/* Grid */}
      {services.length === 0 ? (
        <p className="text-slate-500">No services found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service._id}
              className="group bg-white rounded-xl border shadow-sm overflow-hidden"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={`http://localhost:5000/uploads/services/${service.image}`}
                  alt={service.title}
                  className="w-full h-52 object-cover"
                />

                {/* Overlay actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex justify-end gap-2 p-3">
                  <button
                    onClick={() =>
                      navigate(`/admin/services/edit/${service._id}`)
                    }
                    className="p-2 bg-white rounded-full hover:bg-blue-600 hover:text-white"
                  >
                    <Pencil size={16} />
                  </button>

                  <button
                    onClick={() => handleDelete(service._id)}
                    className="p-2 bg-white rounded-full hover:bg-red-600 hover:text-white"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-2">
                <h2 className="text-lg font-semibold text-slate-800">
                  {service.title}
                </h2>

                <p className="text-sm text-slate-500 line-clamp-3">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceList;
