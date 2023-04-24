// import { Outlet } from "react-router-dom";
import AdsComponents from "../../components/AdsComponents";
import Header from "../../components/Header";
import RightSideNav from "../../components/RightSideNav";

const Home = () => {
  return (
    <div className="w-10/12 mx-auto ">
      <Header />
      <div className="home-layout gap-8">
        <div> this is left side </div>
        <div> this is model</div>
        <RightSideNav>
          <AdsComponents />
        </RightSideNav>
      </div>
    </div>
  );
};

export default Home;
