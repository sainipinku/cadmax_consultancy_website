// import React from "react";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// const services = [
//   {
//     title: "HIGH-ACCURACY DGPS SURVEY",
//     img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/services/LANDMARK-001.jpg",
//     size: "h-[320px]",     // tall
//   },
//   {
//     title: "ENGINEERING SURVEY EXECUTION",
//     img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/home/addnew.jpg",
//     size: "h-[160px]",     // square
//   },
//   {
//     title: "TOPOGRAPHIC GROUND MODELLING",
//     img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/home/addnew.jpg",
//     size: "h-[160px]",     // square
//   },
//   {
//     title: "LAND BOUNDARY AND CONDITION SURVEYING",
//     img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/work/Cadmax.jpg",
//     size: "h-[320px]",     // tall
//   },

//   {
//     title: "MOBILE MAPPING + GIS PRODUCTION",
//     img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/services/ServicesPhoto.jpg",
//     size: "h-[160px]",
//   },
//   {
//     title: "MEP DESIGN ENGINEERING",
//     img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/services/ServicesPhoto.jpg",
//     size: "h-[160px]",
//   },

//   // BOTTOM ROW — landscape wide look
//   {
//     title: "ON-SITE LAYOUT MARKING",
//     img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/services/LANDMARK-001.jpg",
//     size: "h-[140px]",
//   },
//   {
//     title: "GEODETIC AND ADVANCED POSITIONING",
//     img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/services/ServicesPhoto.jpg",
//     size: "h-[140px]",
//   },
//   {
//     title: "URBAN AND SUBDIVISION PLANNING",
//     img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/services/LANDMARK-001.jpg",
//     size: "h-[140px]",
//   },
//   {
//     title: "INFRASTRUCTURE SURVEY SYSTEMS",
//     img: "https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/home/addnew.jpg",
//     size: "h-[140px]",
//   },
// ];

// const MasonryGallery = () => {
//   return (
//     <div className="p-0 m-0">
//       <ResponsiveMasonry
//         columnsCountBreakPoints={{
//           350: 1,
//           600: 2,
//           900: 3,
//           1200: 4,
//         }}
//       >
//         <Masonry gutter="8px">
//           {services.map((item, i) => (
//             <div key={i} className="relative w-full">
              
//               {/* IMAGE */}
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 className={`w-full object-cover rounded-md ${item.size}`}
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/40 rounded-md"></div>

//               {/* Title */}
//               <h3
//                 className="
//                   absolute 
//                   top-1/2 left-1/2 
//                   -translate-x-1/2 -translate-y-1/2 
//                   text-white 
//                   text-sm 
//                   font-bold 
//                   text-center 
//                   uppercase 
//                   px-2
//                 "
//               >
//                 {item.title}
//               </h3>

//             </div>
//           ))}
//         </Masonry>
//       </ResponsiveMasonry>
//     </div>
//   );
// };

// export default MasonryGallery;
