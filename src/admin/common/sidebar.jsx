import React, { useEffect, useState } from "react";
import { MdReviews } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import { PiStudentFill } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai";
import { BsCartCheckFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import API from "../../api/axios"; // ✅ correct path for React app

function SideBar() {
  const location = useLocation();
  const pathname = location.pathname;

  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  // 🔥 fetch inquiries for badge count
  const fetchUnreadCount = async () => {
    try {
      const res = await API.get("/inquiries");
      const unread = res.data.filter((i) => i.status === "unread").length;
      setUnreadCount(unread);
    } catch (err) {
      console.error("Failed to fetch inquiry count", err);
    }
  };

  useEffect(() => {
    fetchUnreadCount();
    const interval = setInterval(fetchUnreadCount, 30000); // auto refresh
    return () => clearInterval(interval);
  }, []);

  const linkClass = (path) =>
    `flex items-center py-2.5 px-3 md:px-4 lg:px-6 gap-2 text-[#565F66] text-base font-medium tracking-[-0.06em]
     ${
       pathname === path
         ? "text-white bg-[#000000]"
         : "hover:bg-gray-100"
     }`;

  return (
    <>
      {!isOpen && (
        <button
          className="lg:hidden p-2 fixed font-bold top-2.5 text-[#565F66] z-[99]"
          onClick={() => setIsOpen(true)}
        >
          <IoIosMenu size={24} />
        </button>
      )}

      <div
        className={`z-50 custom_scroll sidebar border-opacity-10 w-[260px] md:w-[286px] fixed left-0 top-0 bottom-0 overflow-y-auto bg-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:block`}
      >
        {isOpen && (
          <button
            className="lg:hidden p-2 absolute left-[213px] top-6 text-red-700 border border-red-700 z-[99] rounded"
            onClick={() => setIsOpen(false)}
          >
            <IoMdArrowRoundBack size={18} />
          </button>
        )}

        <div className="px-4 lg:px-6 text-center py-6">
          <h2 className="text-xl font-bold tracking-wide">CADMAX</h2>
        </div>

        <div className="py-4 lg:py-5">
          <div className="px-3 md:px-4 lg:px-6 uppercase text-[#727272] text-sm font-medium mb-4 lg:mb-5">
            MAIN MENU
          </div>

          <ul className="mt-2 space-y-1 mb-10">

            <NavLink to="/admin/category" className={linkClass("/admin/category")}>
              <PiStudentFill size={20} />
              Service Page
            </NavLink>

            <NavLink
              to="/admin/subcategory"
              className={linkClass("/admin/subcategory")}
            >
              <MdReviews size={20} />
              Service Subpage
            </NavLink>

            <NavLink to="/admin/product" className={linkClass("/admin/product")}>
              <AiFillProduct size={20} />
              Products
            </NavLink>

            <NavLink to="/admin/order" className={linkClass("/admin/order")}>
              <BsCartCheckFill size={20} />
              Product Order
            </NavLink>

            <NavLink to="/admin/banner" className={linkClass("/admin/banner")}>
              <AiFillProduct size={20} />
              Banners
            </NavLink>

            <NavLink to="/admin/user" className={linkClass("/admin/user")}>
              <AiFillProduct size={20} />
              User
            </NavLink>

            <NavLink to="/admin/booking" className={linkClass("/admin/booking")}>
              <AiFillProduct size={20} />
              Booking
            </NavLink>

            <NavLink to="/admin/project" className={linkClass("/admin/project")}>
              <AiFillProduct size={20} />
              Project
            </NavLink>

            <NavLink
              to="/admin/services/services"
              className={linkClass("/admin/services/services")}
            >
              <AiFillProduct size={20} />
              Concept
            </NavLink>

            <NavLink
              to="/admin/vendor/vendor"
              className={linkClass("/admin/vendor/vendor")}
            >
              <AiFillProduct size={20} />
              Vendor
            </NavLink>

            {/* 🔥 INQUIRIES LINK WITH BADGE */}
            <NavLink
              to="/admin/inquiries"
              className={`flex items-center justify-between py-2.5 px-3 md:px-4 lg:px-6 text-[#565F66] text-base font-medium tracking-[-0.06em]
                ${
                  pathname === "/admin/inquiries"
                    ? "text-white bg-[#000000]"
                    : "hover:bg-gray-100"
                }`}
            >
              <div className="flex items-center gap-2">
                <HiOutlineMail size={20} />
                Inquiries
              </div>

              {unreadCount > 0 && (
                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                  {unreadCount}
                </span>
              )}
            </NavLink>

            <NavLink to="/admin/setting" className={linkClass("/admin/setting")}>
              <IoSettingsOutline size={20} />
              Settings
            </NavLink>

          </ul>
        </div>
      </div>
    </>
  );
}

export default SideBar;
