// src/component/DiaryList.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DiaryCard from './DiaryCard';

const DiaryList = () => { // The `articles` prop is no longer needed
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/articles');
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchArticles();
  }, []); // The empty array ensures this runs only once on component mount

  if (loading) {
    return <p>Loading articles...</p>;
  }

  return (
    <div className="diary-list">
      {articles.length === 0 ? (
        <p>No articles posted yet.</p>
      ) : (
        articles.map(article => (
          <Link to={`/article/${article._id}`} key={article._id}> {/* MongoDB uses _id */}
            <DiaryCard article={article} />
          </Link>
        ))
      )}
    </div>
  );
};

export default DiaryList;