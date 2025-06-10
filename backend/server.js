const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let resumes = [];

app.get("/api/resumes", (req, res) => {
  res.json(resumes);
});

app.post("/api/resumes", (req, res) => {
  const resume = req.body;
  resumes.push(resume);
  res.status(201).json({ message: "Resume added", resume });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
