import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-1/2 ml-auto flex justify-between items-center mb-8">
      <div className=" flex  gap-3 font-semibold ">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className="flex gap-3">
        <CgProfile className="text-5xl items-center cursor-pointer"></CgProfile>
        <button className="bg-[#d72050] btn px-6 text-white font-semibold ">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
