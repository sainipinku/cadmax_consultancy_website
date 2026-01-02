const engineeringPages = [
  {
    title: "Main Gate & Boundary",
    image: "/dummy.jpg",
    description: "Boundary wall & main gate works",
  },
  {
    title: "Road Network",
    image: "/dummy.jpg",
    description: "Internal & external road planning",
  },
  {
    title: "Water Supply",
    image: "/dummy.jpg",
    description: "Water pipeline & drainage",
  },
  {
    title: "Electricity",
    image: "/dummy.jpg",
    description: "Electrical layout & power",
  },
];

const EngineeringList = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Engineering Services</h1>

      <div className="grid grid-cols-2 gap-6">
        {engineeringPages.map((item, i) => (
          <div
            key={i}
            className="border rounded-lg overflow-hidden"
          >
            <img
              src={item.image}
              alt=""
              className="h-40 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-600 mt-1">
                {item.description}
              </p>

              <button className="mt-3 text-sm text-blue-600">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EngineeringList;
