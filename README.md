---

````markdown
# 📚 Online Library System

A lightweight React & Redux-based application to browse, search, and add books, styled in a Minimal Pastel theme.

## Features

- **Home**: Landing page with featured categories and trending books  
- **Browse Books**:  
  - Filter by category (`URL/route filters`)  
  - Search by title or author  
- **Book Details**: View full info and easily return to the list  
- **Add Book**:  
  - Uses Redux for state management  
  - Validates fields (titles, pages, rating, image URL)  
  - Redirects to updated book list after adding  
- **404 Page**: Friendly error with link back home  
- Modern design using **Tailwind CSS**, built with React Router

---

## 🚀 Installation

1. Clone the repo  
   ```bash
   git clone https://github.com/aviral-pal/Online-Library-System.git
````

2. Navigate to the project folder

   ```bash
   cd Online-Library-System
   ```
3. Install packages

   ```bash
   npm install
   ```
4. Start dev server

   ```bash
   npm run dev
   ```
5. Open in browser: `http://localhost:3000` or as indicated in logs

---

## 🧩 Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Home.jsx
│   ├── BrowseBook.jsx
│   ├── BookDetails.jsx
│   ├── AddBooks.jsx
│   ├── Error.jsx
│   ├── Search.jsx
│   └── CategoryFilter.jsx
├── utils/
│   └── booksSlice.js
│   └── mockdata.js
│   └── store.js
│   └── AddBooks.js
├── App.jsx
└── main.jsx
```

* **`mockdata.js`**: Initial book collection
* **`booksSlice.js`**: Redux slice handling book list
* **`components/`**: Presentation and logic for each page/view

---

## 🎨 Styling

All components use **Tailwind CSS**, themed around gentle pastel colors (creams, rose, lavender).

* Soft backgrounds (`#fef6e4`, `#fff1e6`, `#e5989b`)
* Rounded cards, smooth shadows, subtle animations
* Consistent font styling using `font-sans` or `font-mono`

---

## ✅ Usage

* **Browse**: Filter books by category or use search bar
* **View Details**: Click a book card to see details
* **Add Book**: Fill form inputs, validate entries, submit
* **404**: Triggered when going to an undefined URL

---

## 🌱 Contributing

Feel free to open issues, submit PRs, or tweak styles! Suggestions:

* Add **form reset** or success message after adding a book
* Integrate a backend/API for data persistence
* Add login/auth or rating UI improvements

---

## ✅ License

MIT License. See [LICENSE](LICENSE) for details.

---

*Created by Aviral Pal. Have fun exploring books!* ✨

```

---

