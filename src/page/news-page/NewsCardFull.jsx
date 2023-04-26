import { useLoaderData } from "react-router-dom";

const NewsCardFull = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <div>
      <h1 className="text-2xl font-bold ">Dragon News</h1>
      this is news card page
    </div>
  );
};

export default NewsCardFull;
