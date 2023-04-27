import { CgProfile } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="md:w-1/2 ml-auto flex justify-between items-center mb-8 mr-5 ">
      <div className=" flex  gap-3 font-semibold ">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className="flex gap-3">
        <CgProfile className="text-5xl items-center cursor-pointer"></CgProfile>
        {location.pathname === "/auth/login" ? (
          <Link
            to={"/auth/singUp"}
            className=" btn btn-success px-6 text-white font-semibold "
          >
            Sing Up
          </Link>
        ) : (
          <Link
            to={"/auth/login"}
            className="bg-[#d72050] hover:bg-[#b11e45] btn px-6 text-white font-semibold "
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
