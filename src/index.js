import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "ok", status: 200 });
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Server ready on http://localhost:${PORT}`));
