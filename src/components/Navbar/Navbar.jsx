import { Menu } from "lucide-react";
import Logo from "../Logo/Logo.jsx";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="absolute w-full py-8 flex items-center justify-between">
      <Logo />
      <div className="w-[40%] border-t-[1px] border-white opacity-95 hidden lg:block"></div>

      <nav
        className="hidden md:block bg-white/10 backdrop-blur-lg border border-white/20 lg:w-[50%]
      rounded-l-md py-4 px-4"
      >
        <ul className="flex items-center justify-center space-x-8 text-white">
          <li className="relative group">
            <Link to="/" className="font-barlow uppercase">
              <span className="mr-1 font-bold">00</span>
              <span className="font-[300]">Home</span>
            </Link>
            <span className="absolute left-0 -bottom-4 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link to="/destination" className="font-barlow uppercase">
              <span className="mr-1 font-bold">01</span>
              <span className="font-[300]">Destination</span>
            </Link>
            <span className="absolute left-0 -bottom-4 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link to="/crew" className="font-barlow uppercase">
              <span className="mr-1 font-bold">02</span>
              <span className="font-[300]">Crew</span>
            </Link>
            <span className="absolute left-0 -bottom-4 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link to="/technology" className="font-barlow uppercase">
              <span className="mr-1 font-bold">03</span>
              <span className="font-[300]">Technology</span>
            </Link>
            <span className="absolute left-0 -bottom-4 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
      </nav>
      <button className="md:hidden mr-4">
        <Menu className="text-white w-7 h-7"/>
      </button>
    </header>
  );
}

export default Navbar;
