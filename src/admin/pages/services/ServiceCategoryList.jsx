const categories = [
  "Engineering",
  "Surveying",
  "Planning",
];

const ServiceCategoryList = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Service Categories</h1>

      <div className="grid grid-cols-3 gap-6">
        {categories.map(cat => (
          <div
            key={cat}
            className="border rounded-lg p-6 hover:shadow cursor-pointer"
          >
            <h2 className="text-lg font-semibold">{cat}</h2>
            <p className="text-sm text-gray-500">
              Manage {cat} services
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCategoryList;
