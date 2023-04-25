// import { Outlet } from "react-router-dom";
import { Outlet } from "react-router-dom";
import AdsComponents from "../../components/AdsComponents";
import Category from "../../components/Category";
import Header from "../../components/Header";
import RightSideNav from "../../components/RightSideNav";

const Home = () => {
  return (
    <div className="w-10/12 mx-auto ">
      <Header />
      <div className="home-layout gap-8">
        <Category />
        <Outlet />
        <RightSideNav>
          <AdsComponents />
        </RightSideNav>
      </div>
    </div>
  );
};

export default Home;
