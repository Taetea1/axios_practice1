const { render } = require("ejs");
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

// body-parser
// x-www-form-urlencoded 방식, 객체 형태로 결과가 나옴(객체형태: {})
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./views");

let id = "qwer";
let pw = "1234";

// 화면 렌더링
app.get("/", (req, res) => {
  res.render("main");
});
app.get("/join", (req, res) => {
  res.render("join");
});

app.get("/axiosget", (req, res) => {
  res.send(req.query);
});
app.post("/axiospost", (req, res) => {
  console.log(req.body, "post 성공");
  if (id === req.body.id && pw === req.body.pw) {
    res.send("200");
  } else {
    res.send("404");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
