import { useLoaderData } from "react-router-dom";
import NewsCardShort from "./NewsCardShort";

const CategoryNews = () => {
  const newsData = useLoaderData();

  return (
    <div className="overflow-scroll news-scroll h-[1525px]">
      <h1 className="text-2xl font-bold mb-5">Dragon News Home</h1>
      {newsData &&
        newsData.map((news) => (
          <NewsCardShort key={news._id} news={news}></NewsCardShort>
        ))}
    </div>
  );
};

export default CategoryNews;
