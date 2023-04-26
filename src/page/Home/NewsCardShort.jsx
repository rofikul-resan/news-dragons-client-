import moment from "moment";
import {
  BsBookmarkCheck,
  BsFillEyeFill,
  BsFillShareFill,
  BsStar,
  BsStarFill,
} from "react-icons/bs";
import Rating from "react-rating";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NewsCardShort = ({ news }) => {
  const { _id, author, details, image_url, title, total_view, rating } = news;
  return (
    <div className="border-2 mb-5 rounded-md">
      {/* header  of card  */}
      <div className="flex items-center p-5 bg-gray-300 mb-2">
        <img className="h-12 rounded-full mr-3" src={author?.img} alt="" />
        <div className="flex justify-between items-center px-4  flex-1">
          <div>
            <h4 className="font-semibold text-xl  mb-3">{author?.name}</h4>
            <p>{moment(author.published_date).format("YYYY-MM-D")}</p>
          </div>
          <div className="flex gap-4 text-2xl items-center">
            <BsBookmarkCheck />
            <BsFillShareFill />
          </div>
        </div>
      </div>
      {/* body of card  */}

      <div className="mx-5 py-5 border-b-2">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <div className=" h-72 overflow-hidden rounded-xl mb-5">
          <img className="w-full " src={image_url} alt="" />
        </div>
        {details.length >= 240 ? (
          <p>
            {details.slice(0, 240)}{" "}
            <Link
              to={`/news/${_id}`}
              className="ml-2 text-orange-400 font-semibold"
            >
              Read More....
            </Link>{" "}
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>
      {/* footer of card  */}

      <div className="text-xl p-5 flex justify-between">
        <div>
          <Rating
            className="text-orange-500 mr-3 "
            emptySymbol={<BsStar className="mr-2" />}
            fullSymbol={<BsStarFill className="mr-2" />}
            initialRating={rating.number}
            readonly
          />
          <span>{rating.number}</span>
        </div>
        <div>
          <BsFillEyeFill className="inline-block mr-3" />
          <p className="inline-block">{total_view}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCardShort;
