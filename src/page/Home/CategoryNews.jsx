import { useLoaderData } from "react-router-dom";
import NewsCardShort from "./NewsCardShort";

const CategoryNews = () => {
  const newsData = useLoaderData();

  return (
    <div>
      {newsData.map((news) => (
        <NewsCardShort key={news._id} news={news}></NewsCardShort>
      ))}
    </div>
  );
};

export default CategoryNews;
