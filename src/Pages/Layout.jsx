import { Outlet } from "react-router-dom"; // To render nested routes
import { useState } from "react";
import Header from "../Components/Header/Header"; // Header component
import Sidebar from "../Components/sidebar"; // Sidebar component
import Footer from "../Components/Footer/Footer"; // Footer component

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative flex flex-col h-dvh transition-all ">
      <Header toggleSidebar={toggleSidebar} className="flex-none" />

      <div className="flex flex-1">
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          className={`flex-none transition-transform duration-300 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
        />

        <main
          className={`flex-1 p-1 bg-[#f0f2f3] transition-all duration-300 h-full ${
            isSidebarOpen ? "lg:ml-52" : "ml-0"
          }  mx-auto`}
        >
          <Outlet />
        </main>
      </div>

      <div className="w-[calc(100%-8px)] h-[65px]  flex justify-center text-[#031F31] fixed bottom-1 left-0.5 right-0.5 ">
        <Footer className="flex-none " />
      </div>
    </div>
  );
};

export default Layout;
