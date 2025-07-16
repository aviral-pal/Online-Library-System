import { useState } from "react";

function Search({ booksData, filterFunction }) {
  const [searchText, setSearchText] = useState("");

  function handleSearch(e) {
    const text = e.target.value;
    setSearchText(text);

    const filteredBooks = booksData.filter(
      (book) =>
        book.title.toLowerCase().includes(text.toLowerCase()) ||
        book.author.toLowerCase().includes(text.toLowerCase())
    );

    filterFunction(filteredBooks);
  }

  return (
    <div className="flex flex-col items-center mt-12 w-full font-sans text-[#4a4a4a]">
      <h2 className="text-3xl font-semibold mb-6 tracking-wide text-[#a67873]">
        🔍 Find Your Book
      </h2>

      <div className="flex items-center w-full max-w-xl bg-[#fff8f0] border border-[#e0d6d1] rounded-lg px-4 py-3 shadow-md transition-all duration-300">
        <input
          type="text"
          value={searchText}
          onChange={handleSearch}
          placeholder="Search by title or author..."
          className="w-full bg-transparent text-[#6a6a6a] placeholder-[#c0b5ae] focus:outline-none text-sm sm:text-base px-2"
        />
        <button
          className="ml-3 bg-[#f3e7d9] text-[#8a7e76] px-4 py-1 rounded-lg border border-[#e3d5ca] hover:bg-[#e8dacf] hover:text-[#4a4a4a] transition-all duration-300"
          disabled
        >
          GO
        </button>
      </div>
    </div>
  );
}

export default Search;
