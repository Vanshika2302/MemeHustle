import React, { useEffect, useState } from "react";
import axios from "axios";

function MemeFeed() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const res = await axios.get("http://localhost:5000/memes");
        setMemes(res.data);
      } catch (err) {
        console.error("Failed to fetch memes", err);
      }
    };
    fetchMemes();
  }, []);

  return (
    <div className="feed-style">
      <h2 className="meme-style"> Meme Feed</h2>
      {memes.length === 0 ? (
        <p className="text-gray-400" >No memes found </p>
      ) : (
        <div className="meme-map">
          {memes.map((meme) => (
            <div
              key={meme.id}
              className="card-container"
            >
              <img
                src={meme.image_url || "https://picsum.photos/300"}
                alt={meme.title}
                className="w-full"
              />
              <div className="meme-info">
                <h3 className="meme-title">{meme.title}</h3>
                <p className="meme-tags">Tags: {meme.tags}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MemeFeed;
