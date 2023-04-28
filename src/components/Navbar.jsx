import { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const location = useLocation();
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("log out successful");
      })
      .catch((error) => console.log(error));
  };
  return (
    <nav className="md:w-1/2 ml-auto flex justify-between items-center mb-8 mr-5 ">
      <div className=" flex  gap-3 font-semibold ">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className="flex gap-3">
        {user ? (
          <div>
            <CgProfile className="text-5xl items-center cursor-pointer inline-block mr-3"></CgProfile>
            <button
              onClick={handleLogOut}
              className=" btn btn-secondary px-6 text-white font-semibold "
            >
              Log Out
            </button>
          </div>
        ) : (
          <div>
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
