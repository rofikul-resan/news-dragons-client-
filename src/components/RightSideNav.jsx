import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const RightSideNav = ({ children }) => {
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-2xl font-bold mb-3 ">Log in</h1>
        <button className="btn btn-outline btn-primary w-full flex  gap-1 items-center  ">
          <FaGoogle /> Login with Google{" "}
        </button>
        <button className="btn btn-outline  w-full flex  gap-1 items-center  my-3 ">
          {" "}
          <FaGithub /> Login with Github{" "}
        </button>
      </div>
      <div className=" mb-4">
        <h2 className="text-2xl font-bold mb-3">Find Us On</h2>
        <ul className="rounded-lg overflow-hidden ">
          <li className="border border-gray-400 p-4 flex text-xl items-center gap-3 font-semibold italic">
            <FaFacebook /> Facebook
          </li>
          <li className="border border-gray-400 p-4 flex text-xl items-center gap-3 font-semibold italic">
            <FaTwitter /> Twitter
          </li>
          <li className="border border-gray-400 p-4 flex text-xl items-center gap-3 font-semibold italic">
            <FaInstagram /> Instagram
          </li>
        </ul>
      </div>
      <div className="p-4 mb-4 bg-gray-200">
        <h2 className="text-2xl font-bold mb-3">Q-Zone</h2>
        <div>
          <img className="mb-4 w-full" src="./assets/qZone1.png" alt="" />
          <img className="mb-4 w-full" src="./assets/qZone2.png" alt="" />
          <img className="mb-4 w-full" src="./assets/qZone3.png" alt="" />
        </div>
      </div>
      <div className="mb-4">{children}</div>
    </div>
  );
};

export default RightSideNav;
