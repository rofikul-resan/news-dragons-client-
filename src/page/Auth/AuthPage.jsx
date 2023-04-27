import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";

const AuthPage = () => {
  return (
    <div className="bg-gray-200 pt-3 pb-10">
      <div className=" md:w-10/12 mx-auto">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default AuthPage;
