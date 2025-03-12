import { useState, useRef, useEffect } from "react";
import { FaUserCircle, FaUser, FaLock } from "react-icons/fa";

const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile Icon Button */}
      <button
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
        onClick={() => setOpen(!open)}
      >
        <FaUserCircle className="w-6 h-6 text-gray-600 dark:text-gray-300" />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute -right-6 top-11  w-43  bg-[#031F31] shadow-lg rounded-sm border border-gray-200 dark:border-gray-800">
          <ul className="py-2 text-sm">
            <li>
              <button className="flex items-center w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                <FaUser className="w-4 h-4 mr-2" /> Profile
              </button>
            </li>
            <li>
              <button className="flex items-center w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                <FaLock className="w-4 h-4 mr-2" /> Reset Password
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default ProfileDropdown;
