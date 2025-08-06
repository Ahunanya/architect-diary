import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DiaryArticle() {
  const { id } = useParams();
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/diary/${id}`)
      .then(res => res.json())
      .then(data => setEntry(data));
  }, [id]);

  if (!entry) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold">{entry.title}</h2>
      <p>{entry.content}</p>
    </div>
  );
}

export default DiaryArticle;