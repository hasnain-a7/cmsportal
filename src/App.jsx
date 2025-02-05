import  { useState } from 'react';
import Header from './Components/Header/Header';
import Sidebar from './Components/sidebar';
import Footer from './Components/Footer/Footer'; // Import Footer component

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative grid grid-cols-[auto,1fr] grid-rows-[auto,1fr,auto] min-h-screen transition-all">
  <Header toggleSidebar={toggleSidebar} className="col-span-2" />

  <Sidebar
    isOpen={isSidebarOpen}
    toggleSidebar={toggleSidebar}
    className={`transition-transform duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
  />

  <main className={`p-4 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
    {/* Main content goes here */}
  </main>

  <Footer className="col-span-2" />
</div>
  );
}

export default App;