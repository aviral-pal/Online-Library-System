import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Books } from "../utils/mockdata";

function BookDetails() {
  const params = useParams();
  const booksFromRedux = useSelector((state) => state.books.books);
  const allBooks = [...Books, ...booksFromRedux];
  const book = allBooks.find((book) => book.id == params.id);

  if (!book) {
    return (
      <h1 className="text-2xl text-center text-[#9d8189] mt-20 font-mono">
        📚 Book not found!
      </h1>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f2eecb] px-4 py-12 font-mono">
      <div className="w-full max-w-5xl bg-[#fff1e6] border-[3px] border-[#b08968] rounded-xl shadow-xl flex flex-col md:flex-row gap-10 p-8">
        {/* Book Cover */}
        <div className="w-full md:w-1/3 flex justify-center items-start">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-64 h-96 object-cover border-4 border-[#ddb892] rounded-lg shadow-md"
          />
        </div>

        {/* Book Details */}
        <div className="w-full md:w-2/3 space-y-4 text-[#3c2f2f]">
          <h1 className="text-4xl font-extrabold text-[#6d6875] tracking-wide">
            {book.title}
          </h1>
          <h2 className="text-lg font-semibold text-[#9d8189]">✍️ {book.author}</h2>

          <p className="text-[#4a4e69] leading-relaxed tracking-wide">
            {book.description}
          </p>

          <div className="mt-4 text-sm space-y-2 text-[#7f5539]">
            <p>
              <span className="font-bold text-[#b08968]">📖 Pages:</span>{" "}
              {book.pages}
            </p>
            <p>
              <span className="font-bold text-[#b08968]">⭐ Rating:</span>{" "}
              {book.rating}
            </p>
            <p>
              <span className="font-bold text-[#b08968]">📂 Category:</span>{" "}
              {book.category}
            </p>
          </div>

          <Link to="/browsebook">
            <button className="mt-6 px-6 py-2 bg-[#b5838d] hover:bg-[#6d6875] text-white font-semibold rounded-full transition duration-300 ease-in-out hover:scale-105 shadow-md">
              ⬅️ Back to Browse
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
