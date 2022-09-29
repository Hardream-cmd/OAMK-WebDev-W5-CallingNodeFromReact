const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.status(200).json({ message: "node server is responding" });
});

app.listen(port, () => {
  console.log(`server is running ${port}`);
});
