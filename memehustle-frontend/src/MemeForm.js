import React, { useState } from "react";
import axios from "axios";

function MemeForm() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title,
      image_url: imageUrl || "https://picsum.photos/300",
      tags
    };

    try {
      await axios.post("http://localhost:5000/memes", payload);
      alert("Meme created!");
      setTitle("");
      setImageUrl("");
      setTags("");
    } catch (err) {
      console.error("Error creating meme:", err);
      alert("Failed to create meme");
    }
  };

  return (
  <section className="max-wl">
  <h2 className="text-font">Submit a Meme</h2>

  <form onSubmit={handleSubmit} className="space-y-5">
    <div>
      <label className="label-style">Meme Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="input-style"
        placeholder="e.g., Funny Cat"
      />
    </div>

    <div>
      <label className="label-style">Image URL (optional)</label>
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        className="input-style"
        placeholder="e.g., https://i.imgur.com/abcd.jpg"
      />
    </div>

    <div>
      <label className="label-style">Tags (comma-separated)</label>
      <input
        type="text"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        required
        className="input-style"
        placeholder="e.g., funny, animal, meme"
      />
    </div>

    <button type="submit" className="button-style">
      Submit Meme
    </button>
  </form>
</section>

  );
}

export default MemeForm;
