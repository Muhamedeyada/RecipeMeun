import { Heart, Home } from "lucide-react";
import { Link } from "react-router-dom"; // Ensure you import Link from react-router-dom

const Bar = () => {
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  );
};

export default Bar;

const DesktopSidebar = () => {
  return (
    <div className="p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block bg-white shadow-lg">
      <div className="flex flex-col gap-20 sticky top-10 left-0">
        <div className="w-full flex justify-center mb-8">
          <img src="/logo.png" alt="logo" className="hidden md:block" />
          <img src="/mobile-logo.svg" alt="logo" className="block md:hidden" />
        </div>
        <ul className="flex flex-col items-center md:items-start gap-8">
          <SidebarItem to="/" icon={<Home size={24} />} label="Home" />
          <SidebarItem
            to="/favorite"
            icon={<Heart size={24} />}
            label="Favorites"
          />
        </ul>
      </div>
    </div>
  );
};

const SidebarItem = ({ to, icon, label }) => {
  return (
    <li className="flex items-center gap-4 hover:bg-gray-200 rounded-lg p-2 transition duration-300 ease-in-out">
      <Link
        to={to}
        className="flex items-center gap-2 text-gray-700 hover:text-green-500"
      >
        <div className="text-gray-500">{icon}</div>
        <span className="font-bold text-sm md:text-base hidden md:block">
          {label}
        </span>
      </Link>
    </li>
  );
};

const MobileSidebar = () => {
  return (
    <div className="flex justify-center gap-10 border-t fixed w-full bottom-0 left-0 bg-white z-10 p-2 sm:hidden shadow-md">
      <MobileSidebarItem to="/" icon={<Home size={24} />} />
      <MobileSidebarItem to="/favorite" icon={<Heart size={24} />} />
    </div>
  );
};

const MobileSidebarItem = ({ to, icon }) => {
  return (
    <Link
      to={to}
      className="flex items-center justify-center gap-1 text-gray-700 hover:text-green-500 p-2 transition duration-300 ease-in-out"
    >
      {icon}
    </Link>
  );
};
