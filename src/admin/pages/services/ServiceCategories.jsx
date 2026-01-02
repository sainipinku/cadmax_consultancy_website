import { Link } from "react-router-dom";

const categories = [
  { title: "Engineering", slug: "engineering" },
  { title: "Surveying", slug: "surveying" },
  { title: "Planning", slug: "planning" },
];

const ServiceCategories = () => {
  return (
    <div className="bg-white p-6 rounded-xl">
      <h1 className="text-xl font-bold mb-6">Service Categories</h1>

      <div className="grid grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            to={`/admin/services/${cat.slug}`}
            className="border rounded-xl p-8 text-center
                       hover:shadow-lg hover:border-blue-600 transition"
          >
            <h2 className="text-lg font-extrabold uppercase">
              {cat.title}
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Manage main & sub pages
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceCategories;
