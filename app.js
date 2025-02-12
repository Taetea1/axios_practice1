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
// 뒤에서부터임...
app.get("/asjdsjdhh2", (req, res) => {
  res.render("asjdsjdhh2");
});
app.get("/dhsjhsjd14", (req, res) => {
  res.render("dhsjhsjd14");
});
app.get("/djdsksnn1", (req, res) => {
  res.render("djdsksnn1");
});
app.get("/djkskjdsjsk12", (req, res) => {
  res.render("djkskjdsjsk12");
});
app.get("/dkdkkw5", (req, res) => {
  res.render("dkdkkw5");
});
app.get("/dksjdknsk124", (req, res) => {
  res.render("dksjdknsk124");
});
app.get("/dksjdskj1jk", (req, res) => {
  res.render("dksjdskj1jk");
});
app.get("/dmdmsms1", (req, res) => {
  res.render("dmdmsms1");
});
app.get("/dmdmsn12", (req, res) => {
  res.render("dmdmsn12");
});
app.get("/dmsmsmx1", (req, res) => {
  res.render("dmsmsmx1");
});
app.get("/dsasdw1", (req, res) => {
  res.render("dsasdw1");
});
app.get("/dsds14", (req, res) => {
  res.render("dsds14");
});
app.get("/dsndjsjsn124", (req, res) => {
  res.render("dsndjsjsn124");
});
app.get("/dsnsq123", (req, res) => {
  res.render("dsnsq123");
});
app.get("/ejmdnwnq2", (req, res) => {
  res.render("ejmdnwnq2");
});
app.get("/gmsmd213", (req, res) => {
  res.render("gmsmd213");
});
app.get("/ndnsns1", (req, res) => {
  res.render("ndnsns1");
});
app.get("/sadksandamsndmn1", (req, res) => {
  res.render("sadksandamsndmn1");
});
app.get("/sajdnskdk2", (req, res) => {
  res.render("sajdnskdk2");
});
app.get("/skdksjdksjksjd1", (req, res) => {
  res.render("skdksjdksjksjd1");
});
// 여기가 첫번째임

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
