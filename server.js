const express = require("express");
const path = require("path");

const app = express();
const port = 3001;

app.use(express.static(path.resolve(__dirname, "dist")));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`);
});
