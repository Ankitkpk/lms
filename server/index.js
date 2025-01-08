require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Environment Variables
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL;
const MONGO_URL = process.env.MONGO_URL;


app.use(
    cors({
      origin: CLIENT_URL,
      methods: ["GET", "POST", "DELETE", "PUT"],
      allowedHeaders: ["content-type", "Authorization"],
    })
  );
app.use(express.json());


mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  });

// Routes
app.get("/", (req, res) => {
  res.send("Server is running!");
});


app.get("/api/data", (req, res) => {
  res.json({ message: "This is a sample API route" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
