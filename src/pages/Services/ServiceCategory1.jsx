import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../../api/axios";

const ServiceCategory = () => {
  const { categorySlug } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    API.get(`/services/${categorySlug}`).then(res =>
      setCategory(res.data)
    );
  }, [categorySlug]);

  if (!category) return null;

  return (
    <>
      {/* HERO */}
      <div
        className="h-[450px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${category.heroImage})` }}
      >
        <h1 className="text-4xl text-white font-bold">
          {category.title}
        </h1>
      </div>

      {/* PAGES */}
      <div className="container mx-auto py-16 grid md:grid-cols-3 gap-6">
        {category.pages.map(page => (
          <Link
            key={page._id}
            to={`/services/${category.slug}/${page.slug}`}
            className="border p-6 hover:shadow"
          >
            <h3 className="text-xl font-semibold">{page.title}</h3>
            <p>{page.shortDesc}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ServiceCategory;
