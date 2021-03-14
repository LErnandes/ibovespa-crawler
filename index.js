const express = require("express");
const ibovespa = require('./crawler');
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  res.json(await ibovespa());
});

app.listen(port, () => console.log(`http://localhost:${port}`));
