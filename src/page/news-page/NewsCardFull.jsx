import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";
import EditorInsight from "./EditorInsight";

const NewsCardFull = () => {
  const news = useLoaderData();
  const { details, image_url, title, category_id } = news;
  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Dragon News</h1>
      <div className="border-2 mb-5 rounded-md">
        {/* body of card  */}

        <div className="mx-5 py-5 ">
          <div className="rounded-xl mb-5">
            <img className="w-full " src={image_url} alt="" />
          </div>
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="mb-8">{details}</p>
          <Link
            className="bg-[#d72050] px-3 py-2 ml-10 w-fit items-center flex gap-4 text-white font-semibold "
            to={`/news-category/${category_id}`}
          >
            <span>
              {" "}
              <AiOutlineArrowLeft className="text-white" />
            </span>{" "}
            All news in this category
          </Link>
        </div>
      </div>
      <EditorInsight />
    </div>
  );
};

export default NewsCardFull;
