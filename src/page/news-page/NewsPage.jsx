import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import RightSideNav from "../../components/RightSideNav";

const NewsPage = () => {
  return (
    <div className="w-10/12 mx-auto ">
      <Header />
      <div className="news-page-layout gap-8">
        <Outlet />
        <RightSideNav></RightSideNav>
      </div>
    </div>
  );
};

export default NewsPage;
