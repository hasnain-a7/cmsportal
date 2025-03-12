import { Outlet } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/OtherComponents/Sidebar";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        event.target.closest("header") === null
      ) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="relative flex flex-col h-dvh transition-all w-full">
      <Header
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
        className="flex-none"
      />

      <div className="flex flex-1">
        <div ref={sidebarRef}>
          <Sidebar
            isOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
            className={`flex-none transition-transform duration-300 transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0`}
          />
        </div>

        <main
          className={`flex-1 p-4 bg-[#F5F5F5] transition-all duration-300 h-full ${
            isSidebarOpen ? "lg:ml-52" : "ml-0"
          } mx-auto`}
        >
          <Outlet />
        </main>
      </div>

      <div className="w-full h-[50px] flex justify-center text-[#031F31]">
        <Footer className="flex-none" />
      </div>
    </div>
  );
};

export default Layout;
