import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-[#fdf6f0] text-gray-800 font-sans flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Content Container */}
      <div className="z-10 max-w-6xl w-full text-center space-y-12">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#c27ba0]">
          📚 Online Book Library
        </h1>
        <p className="text-md sm:text-lg md:text-xl text-[#928e85] font-medium max-w-2xl mx-auto">
          "A book is a quiet friend in a noisy world." 📖💫
        </p>

        {/* Categories */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#9bbec7]">
            📂 Categories
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Fiction", "Non-Fiction", "Science", "History"].map((category) => (
              <Link
                key={category}
                to={`/books/category/${category.toLowerCase()}`}
                className="px-5 py-2 bg-[#d6f5e3] text-[#4a756d] rounded-full border border-[#bce3d0] hover:bg-[#bce3d0] transition-all duration-300 shadow-sm"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

        {/* Trending Books */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#ffc3a0] mb-6">
            🔥 Trending Books
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: 14,
                title: "Becoming",
                author: "Michelle Obama",
                img: "https://m.media-amazon.com/images/I/81KGjsBXQ7L._AC_UF1000,1000_QL80_.jpg",
              },
              {
                id: 9,
                title: "Moby-Dick",
                author: "Herman Melville",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Moby-Dick_FE_title_page.jpg/800px-Moby-Dick_FE_title_page.jpg",
              },
              {
                id: 3,
                title: "Tom Jones",
                author: "Henry Fielding",
                img: "https://upload.wikimedia.org/wikipedia/commons/a/a1/TomJonesTitle.png",
              },
              {
                id: 5,
                title: "Le Rouge et le Noir",
                author: "Stendhal (Henri Beyle)",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/StendhalRedandBlack04.jpg/440px-StendhalRedandBlack04.jpg",
              },
            ].map((book) => (
              <div
                key={book.id}
                className="bg-white border border-[#eee] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <img
                  src={book.img}
                  alt={book.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="font-semibold text-lg text-[#7b9e89]">{book.title}</h3>
                <p className="text-sm text-[#a7a7a7]">{book.author}</p>
                <Link to={`/books/${book.id}`}>
                  <button className="mt-3 w-full bg-[#ffecd1] text-[#b06f45] border border-[#fcd7b6] px-4 py-2 rounded-full font-medium hover:bg-[#fcd7b6] transition duration-300">
                    View More →
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
