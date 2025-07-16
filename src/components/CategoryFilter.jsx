import { Link, useLocation } from "react-router-dom";

function CategoryFilter() {
  const location = useLocation();

  const categories = [
    { name: "Fiction", path: "fiction" },
    { name: "Non-Fiction", path: "non_fiction" },
    { name: "Science", path: "science" },
    { name: "History", path: "history" },
  ];

  return (
    <div className="flex flex-col items-center mt-12 font-sans">
      <h2 className="text-3xl font-bold text-[#8b5e83] mb-6 tracking-wide">
        📂 Browse Categories
      </h2>

      <div className="flex gap-4 flex-wrap justify-center px-4 py-2">
        {categories.map((category) => {
          const isActive = location.pathname.includes(category.path);
          return (
            <Link
              key={category.path}
              to={`/books/category/${category.path}`}
              className={`px-5 py-2 text-sm font-medium rounded-full border transition-all duration-300 tracking-wide
                ${
                  isActive
                    ? "bg-[#f4acb7] text-white border-[#9d8189] shadow-md scale-105"
                    : "bg-[#fef6e4] text-[#6d6875] border-[#ddd] hover:bg-[#e0afa0] hover:text-[#2b2d42]"
                }`}
            >
              {category.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryFilter;
