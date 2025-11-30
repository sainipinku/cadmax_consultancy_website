import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const services = [
  {
    title: "HIGH-ACCURACY DGPS SURVEY",
    img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/services/LANDMARK-001.jpg",
  },
  {
    title: "ENGINEERING SURVEY EXECUTION",
    img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/home/addnew.jpg",
  },
  {
    title: "MEP DESIGN ENGINEERING",
    img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/services/ServicesPhoto.jpg",
  },
  {
    title: "LAND BOUNDARY AND CONDITION SURVEYING",
    img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/work/Cadmax.jpg",
  },
  {
    title: "MOBILE MAPPING + GIS PRODUCTION",
    img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/services/ServicesPhoto.jpg",
  },
  {
    title: "TOPOGRAPHIC GROUND MODELLING",
    img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/home/addnew.jpg",
  },
  {
    title: "URBAN AND SUBDIVISION PLANNING",
    img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/services/LANDMARK-001.jpg",
  }, {
    title: "ENGINEERING SURVEY EXECUTION",
    img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/home/addnew.jpg",
  },
  {
    title: "MEP DESIGN ENGINEERING",
    img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/services/ServicesPhoto.jpg",
  },
  {
    title: "LAND BOUNDARY AND CONDITION SURVEYING",
    img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/work/Cadmax.jpg",
  },
  {
    title: "MOBILE MAPPING + GIS PRODUCTION",
    img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/services/ServicesPhoto.jpg",
  },
  {
    title: "TOPOGRAPHIC GROUND MODELLING",
    img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/home/addnew.jpg",
  },
  {
    title: "URBAN AND SUBDIVISION PLANNING",
    img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/services/LANDMARK-001.jpg",
  }
];

const MasonryGallery = () => {
  return (
    <div style={{ padding: "0", margin: "0" }}>
      <ResponsiveMasonry
        columnsCountBreakPoints={{
          350: 1,
          600: 2,
          900: 3,
          1200: 4,
          1500: 4, // ⭐ 5 columns on large screens
        }}
      >
        <Masonry gutter="8px">  {/* Grid gaps small and clean */}
          {services.map((item, i) => (
            <div key={i} style={{ position: "relative" }}>
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "100%",
                  display: "block",
                  borderRadius: "6px",
                }}
              />

              {/* Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0, 0, 0, 0.45)",
                  borderRadius: "6px",
                }}
              />

              {/* Title */}
              <h3
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: "700",
                  textAlign: "center",
                  textTransform: "uppercase",
                  padding: "0 5px",
                }}
              >
                {item.title}
              </h3>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default MasonryGallery;
