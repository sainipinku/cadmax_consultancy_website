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
];

const MasonryGallery = () => {
  return (
    <div className="p-0 m-0">
      <ResponsiveMasonry
        columnsCountBreakPoints={{
          350: 1,
          600: 2,
          900: 3,
          1200: 4,
          1500: 4,
        }}
      >
        <Masonry gutter="8px">
          {services.map((item, i) => (
            <div key={i} className="relative w-full">

              <img
                src={item.img}
                alt={item.title}
                className="
                  w-full             
                   h-auto           
                   aspect-video       
                    object-cover      
                     rounded-md "
              />


              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 rounded-md"></div>

              {/* Title */}
              <h3
                className="
                  absolute 
                  top-1/2 left-1/2 
                  -translate-x-1/2 -translate-y-1/2 
                  text-white 
                  text-sm 
                  font-bold 
                  text-center 
                  uppercase 
                  px-2
                "
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
