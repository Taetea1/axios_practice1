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

// 화면 렌더링
app.get("/", (req, res) => {
  res.render("main");
});

app.get("/page1", (req, res) => {
  res.render("page1", { title: "page1 입니다." });
});
app.get("/page2", (req, res) => {
  res.render("page2", { title: "page2 입니다." });
});
app.get("/page3", (req, res) => {
  res.render("page3", { title: "page3 입니다." });
});
app.get("/page4", (req, res) => {
  res.render("page4", { title: "page4 입니다." });
});
app.get("/page5", (req, res) => {
  res.render("page5", { title: "page5 입니다." });
});
app.get("/page6", (req, res) => {
  res.render("page6", { title: "page6 입니다." });
});
app.get("/page7", (req, res) => {
  res.render("page7", { title: "page7 입니다." });
});
app.get("/page8", (req, res) => {
  res.render("page8", { title: "page8 입니다." });
});
app.get("/page9", (req, res) => {
  res.render("page9", { title: "page9 입니다." });
});
app.get("/page10", (req, res) => {
  res.render("page10", { title: "page10 입니다." });
});
app.get("/page11", (req, res) => {
  res.render("page11", { title: "page11 입니다." });
});
app.get("/page12", (req, res) => {
  res.render("page12", { title: "page12 입니다." });
});
app.get("/page13", (req, res) => {
  res.render("page13", { title: "page13 입니다." });
});
app.get("/page14", (req, res) => {
  res.render("page14", { title: "page14 입니다." });
});
app.get("/page15", (req, res) => {
  res.render("page15", { title: "page15 입니다." });
});
app.get("/page16", (req, res) => {
  res.render("page16", { title: "page16 입니다." });
});
app.get("/page17", (req, res) => {
  res.render("page17", { title: "page17 입니다." });
});
app.get("/page18", (req, res) => {
  res.render("page18", { title: "page18 입니다." });
});
app.get("/page19", (req, res) => {
  res.render("page19", { title: "page19 입니다." });
});
app.get("/page20", (req, res) => {
  res.render("page20", { title: "page20 입니다." });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
