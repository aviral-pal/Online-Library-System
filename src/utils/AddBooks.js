import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../utils/booksSlice";
import { useNavigate } from "react-router-dom";

function AddBooks() {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    description: "",
    pages: "",
    rating: "",
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBookData({
      ...bookData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const validationErrors = {};
    if (!bookData.title) validationErrors.title = "Title is required.";
    if (!bookData.author) validationErrors.author = "Author is required.";
    if (!bookData.description) validationErrors.description = "Description is required.";
    if (!bookData.pages || isNaN(bookData.pages) || bookData.pages <= 0)
      validationErrors.pages = "Please enter a valid page count.";
    if (!bookData.rating || isNaN(bookData.rating) || bookData.rating < 1 || bookData.rating > 5)
      validationErrors.rating = "Please provide a rating between 1 and 5.";
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    dispatch(addBook(bookData));
    navigate("/browsebook");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-lime-100 to-blue-100 px-4 py-12">
      <div className="w-full max-w-2xl bg-white border border-pastel-pink rounded-xl shadow-lg p-8 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-rose-400 mb-8">
          📖 Add a New Book
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {["title", "author", "description", "pages", "rating"].map((field, i) => (
            <div key={i}>
              <label className="block text-pastel-gray font-medium mb-1 capitalize">
                {field === "rating" ? "Rating (1–5)" : field}
              </label>
              {field === "description" ? (
                <textarea
                  name="description"
                  value={bookData.description}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-2 bg-pink-50 text-gray-700 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
                />
              ) : (
                <input
                  type={field === "pages" || field === "rating" ? "number" : "text"}
                  name={field}
                  value={bookData[field]}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-pink-50 text-gray-700 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
                />
              )}
              {errors[field] && (
                <p className="text-rose-400 text-sm mt-1">{errors[field]}</p>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-300 to-yellow-200 text-gray-800 font-semibold py-3 rounded-lg hover:scale-105 transition-transform duration-300"
          >
            ➕ Add Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBooks;
