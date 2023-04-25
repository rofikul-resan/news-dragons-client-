import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Category = () => {
  const [categories, setCategory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/category")
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
    </div>
  );
};

export default Category;
