import { useLoaderData } from "react-router-dom";
import NewsCardShort from "./NewsCardShort";

const CategoryNews = () => {
  const newsData = useLoaderData();

  return (
    <div className="overflow-scroll news-scroll h-[1525px]">
      {newsData.map((news) => (
        <NewsCardShort key={news._id} news={news}></NewsCardShort>
      ))}
    </div>
  );
};

export default CategoryNews;
