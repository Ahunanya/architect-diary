// src/component/DiaryForm.jsx

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function DiaryForm({ onPostSuccess }) {
  // ... your state and form handling logic ...
  const handleSubmit = async (e) => {
    e.preventDefault();
    // ... fetch logic to post the new article ...
    try {
      await fetch('http://localhost:5000/api/diary', {
        // ...
      });
      onPostSuccess(); // Call this after a successful post
      navigate('/');
    } catch (error) {
      console.error("Failed to post article:", error);
    }
  };
  // ...
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate(); 

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <input
        className="block w-full mb-2 p-2 border"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        className="block w-full mb-2 p-2 border"
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Content"
        required
      />
      <button className="bg-neutral-900 text-white px-4 py-2 rounded" type="submit">
        Post
      </button>
    </form>
  );
}