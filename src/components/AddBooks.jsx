import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../utils/booksSlice";

function AddBooks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [pages, setPages] = useState("");
  const [rating, setRating] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [error, setError] = useState("");

  const validateForm = () => {
    if (!title || !author || !description || !pages || !rating || !coverImage) {
      setError("All fields are required!");
      return false;
    }
    if (isNaN(pages) || isNaN(rating)) {
      setError("Pages and rating must be numeric.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newBook = {
        id: Date.now(),
        title,
        author,
        description,
        pages,
        rating,
        coverImage,
      };
      dispatch(addBook(newBook));
      navigate("/browsebook");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f2eecb] p-6 font-mono">
      <div className="w-full max-w-2xl bg-[#fff1e6] border-4 border-[#d4a373] rounded-xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center text-[#6d6875] mb-6">
          📚 Add a New Book
        </h1>

        {error && (
          <p className="text-[#9d0208] text-center mb-4 font-semibold border border-[#e5989b] bg-[#ffddd2] p-3 rounded-lg">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Input Fields */}
          {[
            { label: "Title", value: title, setValue: setTitle, type: "text" },
            { label: "Author", value: author, setValue: setAuthor, type: "text" },
            { label: "Pages", value: pages, setValue: setPages, type: "number" },
            { label: "Rating", value: rating, setValue: setRating, type: "number", step: "0.1" },
            { label: "Cover Image URL", value: coverImage, setValue: setCoverImage, type: "text" },
          ].map(({ label, value, setValue, type, step }, idx) => (
            <div key={idx}>
              <label className="block text-sm font-semibold text-[#7f5539] mb-1">
                {label}:
              </label>
              <input
                type={type}
                step={step}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={`Enter ${label.toLowerCase()}`}
                className="w-full px-4 py-2 bg-white text-[#3c2f2f] border border-[#b08968] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e5989b] placeholder:text-[#a68a64] transition-all"
              />
            </div>
          ))}

          {/* Description Field */}
          <div>
            <label className="block text-sm font-semibold text-[#7f5539] mb-1">
              Description:
            </label>
            <textarea
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write a short description..."
              className="w-full px-4 py-2 bg-white text-[#3c2f2f] border border-[#b08968] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e5989b] placeholder:text-[#a68a64] transition-all"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#b5838d] hover:bg-[#6d6875] text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            ➕ Add Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBooks;
