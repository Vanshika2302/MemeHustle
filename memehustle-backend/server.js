const express = require("express");
const cors = require("cors");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: "*" }
});

app.use(cors());
app.use(express.json());

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

app.get("/", (req, res) => {
  res.send("🚀 MemeHustle Backend is running!");
});

// Fetch all memes
app.get("/memes", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("meme")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Fetch error:", error);
      return res.status(500).json({ error: "Failed to fetch memes" });
    }

    res.json(data);
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// Create a meme
app.post("/memes", async (req, res) => {
  const { title, image_url, tags } = req.body;
  console.log("Incoming meme data:", { title, image_url, tags });

  try {
    const { data, error } = await supabase
      .from("meme")
      .insert([
        {
          title,
          image_url: image_url || "https://picsum.photos/200",
          tags : tags.split(',').map(tag => tag.trim()),
          upvotes: 0,
          owner_id: "anon"
        }
      ])
      .select();

    if (error) {
      console.error("Insert error:", error);
      return res.status(500).json({ error: "Failed to create meme" });
    }

    io.emit("new-meme", data[0]);
    res.status(201).json(data[0]);
  } catch (err) {
    console.error("Unhandled error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
