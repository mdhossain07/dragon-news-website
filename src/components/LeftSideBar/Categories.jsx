import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">All Categories</h2>
      {categories.map((category) => (
        <NavLink
          to={`/category/${category.id}`}
          className={`({ isActive }) =>
            isActive && "bg-[#E7E7E7]"
          block mb-2`}
          key={category.id}
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
