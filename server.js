const express = require("express");
const path = require("path");
const fetch = require("node-fetch").default;

const app = express();
const port = 3001;

app.use(express.static(path.resolve("dist", "www")));

app.get("/a", (req, res) => {
  console.log("Hitting /a endpoint!");

  fetch("http://api:3000/a")
    .then(r => r.json())
    .then(data => res.send(data))
    .catch(err => console.log(`Something went wrong! ${err}`))
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`);
});
