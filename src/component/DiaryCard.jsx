// src/components/ArticleCard.jsx

import React from 'react';

const DiaryCard = ({ article }) => {
  return (
    <div className="article-card border p-4 mb-4 rounded shadow-md">
      {article.imageUrl && <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover rounded mb-2" />}
      <h3 className="text-xl font-bold">{article.title}</h3>
      <p className="text-neutral-700">{article.content}</p>
    </div>
  );
};

export default DiaryCard;