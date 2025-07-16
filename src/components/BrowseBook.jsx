import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Books } from "../utils/mockdata";
import Search from "./Search";
import CategoryFilter from "./CategoryFilter";

function BrowseBook() {
  const { category } = useParams();
  const booksFromStore = useSelector((state) => state.books.books);
  const allBooks = [...Books, ...booksFromStore];

  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      if (category) {
        const formattedCategory = category.replace("-", " ").toLowerCase();
        const filteredData = allBooks.filter(
          (book) => book.category.toLowerCase() === formattedCategory
        );
        setFilteredBooks(filteredData);
      } else {
        setFilteredBooks(allBooks);
      }
      setLoading(false);
    }, 500);
  }, [category, booksFromStore]);

  const filterBooks = (filteredData) => {
    setFilteredBooks(filteredData);
  };

  return (
    <div className="min-h-screen bg-[#fefae0] px-6 py-12 font-sans text-[#3c2f2f]">
      {/* Category Filter */}
      <CategoryFilter />

      {/* Search */}
      <div className="mt-10 flex justify-center">
        <Search booksData={allBooks} filterFunction={filterBooks} />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center mt-12 mb-10 text-[#b5838d] tracking-wide">
        {category
          ? `${category.charAt(0).toUpperCase() + category.slice(1)} Books`
          : "📚 Our Retro Book Library"}
      </h1>

      {/* Loading */}
      {loading && (
        <div className="flex justify-center items-center my-10">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-t-[#e5989b] border-[#ffb4a2]"></div>
        </div>
      )}

      {/* Book Cards */}
      {!loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <div
                key={book.id}
                className="bg-[#fff1e6] border border-[#d6a2a2] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full h-60 object-cover border-b border-[#d6a2a2]"
                />
                <div className="p-4 text-center">
                  <h2 className="text-lg font-bold text-[#6d6875]">{book.title}</h2>
                  <p className="text-sm text-[#7f5539] mt-1">By {book.author}</p>
                  <span className="inline-block mt-2 bg-[#f4acb7] text-white text-xs font-medium px-3 py-1 rounded-full">
                    {book.category}
                  </span>
                  <Link to={`/books/${book.id}`}>
                    <button className="mt-4 px-4 py-2 bg-[#9d8189] hover:bg-[#6d6875] text-white font-semibold rounded-full transition duration-300 hover:scale-105 shadow-sm">
                      🔍 View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-lg text-[#9d8189] col-span-full mt-8">
              No books found in this category.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default BrowseBook;
