import { useEffect, useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Category = () => {
  const [categories, setCategory] = useState([]);
  useEffect(() => {
    fetch(" https://news-dragon-server-resan6231-gmailcom.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div>
      <h3 className="text-3xl font-bold  mb-6">All Category</h3>
      <div className="flex flex-col text-xl font-semibold text-gray-400 ml-6 ">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className={({ isActive }) =>
              isActive ? "bg-gray-300 text-gray-800  p-3 rounded-md " : "p-3"
            }
            to={`/news-category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
      <div className="grid gap-4 mb-10 mt-6 ">
        {/* single  card */}
        <div className="border p-2">
          <img className="w-full " src="/assets/1.png" alt="" />
          <h1 className="text-xl mb-3 font-bold">
            21 The Most Stylish Wedding Guest Dresses For Spring
          </h1>
          <div className="flex items-center text-gray-400">
            <AiOutlineCalendar />
            <p>Jan 4, 2022</p>
          </div>
        </div>
        {/* single  card */}
        <div className="border p-2">
          <img src="/assets/2.png" alt="" />
          <h1 className="text-xl mb-3 font-bold">
            21 The Most Stylish Wedding Guest Dresses For Spring
          </h1>
          <div className="flex items-center text-gray-400 gap-3">
            <AiOutlineCalendar />
            <p>Jan 4, 2022</p>
          </div>
        </div>
        {/* single  card */}
        <div className="border p-2">
          <img src="/assets/3.png" alt="" />
          <h1 className="text-xl mb-3 font-bold">
            21 The Most Stylish Wedding Guest Dresses For Spring
          </h1>
          <div className="flex items-center text-gray-400">
            <AiOutlineCalendar />
            <p>Jan 4, 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
