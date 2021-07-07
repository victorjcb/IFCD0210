const express = require("express");
const app = express();
const port = 3000;


app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("index", { titulo: "inicio EJS" });
});

app.get("/nosotros", (req, res) => {
  res.render("nosotros", { titulo: "Nosotros EJS" });
});

app.use((req, res, next) => {
  res.status(404).render("404", { titulo: "Página 404" });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});