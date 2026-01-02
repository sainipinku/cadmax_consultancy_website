import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../../api/axios";

const ServicePage = () => {
  const { categorySlug, pageSlug } = useParams();
  const [page, setPage] = useState(null);

  useEffect(() => {
    API.get(`/services/${categorySlug}/${pageSlug}`).then(res =>
      setPage(res.data)
    );
  }, [categorySlug, pageSlug]);

  if (!page) return null;

  return (
    <>
      {/* HERO */}
      <div
        className="h-[450px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${page.heroImage})` }}
      >
        <h1 className="text-4xl text-white font-bold ml-20">
          {page.title}
        </h1>
      </div>

      {/* CONTENT */}
      <div className="container mx-auto py-16">
        <div dangerouslySetInnerHTML={{ __html: page.description }} />
      </div>

      {/* PROJECTS / SLIDER */}
      {page.projects?.length > 0 && (
        <div className="container mx-auto pb-16">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {page.projects.map(p => (
              <img key={p._id} src={p.image} alt="" />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ServicePage;
