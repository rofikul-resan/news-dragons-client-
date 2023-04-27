import moment from "moment/moment";
import Marquee from "react-fast-marquee";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      <div className="mx-auto w-fit text-center mt-12">
        <img className="w-full" src="/assets/logo.png" alt="" />
        <p className="mt-5">Journalism Without Fear or Favour</p>
        <p className="text-sm mt-2">{moment().format("dddd, MMMM D , YYYY")}</p>
      </div>
      <div className="bg-gray-300 p-3 flex my-4 gap-6">
        <button className="bg-[#d72050] px-3 py-2 text-white font-semibold ">
          Latest
        </button>
        <Marquee className="text-xl" pauseOnHover={true}>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as... Match Highlights: Germany vs Spain
          — as it happened ! Match Highlights: Germany vs Spain as...
        </Marquee>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
