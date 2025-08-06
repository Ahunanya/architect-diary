import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import DiaryList from "./DiaryList";
import DiaryForm from "./DiaryForm";
import DiaryArticle from "./DiaryArticle";
import About from "./About";
import Footer from "./Footer";
import '../styles/output.css';
import ArticleList from '../component/DiaryList'; ;


function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handlePostSuccess = () => {
    // This will force DiaryList to re-render
    setRefreshKey(prevKey => prevKey + 1);
  };

  return (
    <Router>
      <Navbar />
      <div className="max-w-3xl mx-auto p-4">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <About />
                {/* Button to go to the article form page */}

                 <div className="container mx-auto p-4">
    
      <hr className="my-8" />
      <h2 className="text-3xl font-bold mb-4">Recent Articles</h2>
      <DiaryList />
    </div>
                <div className="my-4">
                  <Link
                    to="/new-article"
                    className="inline-block bg-neutral-900 text-white px-4 py-2 rounded hover:bg-neutral-700 transition"
                  >
                    Write a New Article
                  </Link>
                </div>
                <DiaryList />
              </>
            }
          />
          <Route path="/new-article" element={<DiaryForm />} />
          <Route path="/article/:id" element={<DiaryArticle />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
