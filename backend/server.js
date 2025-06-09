const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Resume Tracker API is live!");
});

// Temporary data
let resumes = [];

// Get all resumes
app.get("/api/resumes", (req, res) => {
  res.json(resumes);
});

// Add a new resume
app.post("/api/resumes", (req, res) => {
  const newResume = req.body;
  resumes.push(newResume);
  res.status(201).json({ message: "Resume added", data: newResume });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
