const express = require("express");
const app = express();
const PORT = 8383;

app.use(express.json());
let data = [];

app.get("/", (req, res) => {
  console.log("It is working", req.method);
  res.sendStatus(200);
});

app.get("/api/data", (req, res) => {
  console.log("It is receiving the first post request", req.method);
  res.send(data);
});

app.post("/api/data", (req, res) => {
  const newEntry = req.body;
  console.log(newEntry);
  data.push(newEntry.name);
  res.sendStatus(201);
});

app.delete("/api/data", (req, res) => {
  data.pop();
  console.log("Deleted successfully");
  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
