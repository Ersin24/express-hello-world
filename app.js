const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

app.get("/health", (req, res) => { 

  res.sendStatus(200); 

}); 

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

