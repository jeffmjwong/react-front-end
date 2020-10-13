const express = require("express");
const path = require("path");

const app = express();
const port = 80;

app.use(express.static(path.resolve("dist", "www")));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`);
});
