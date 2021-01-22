const express = require('express');
const app = express();

app.use(express.json());

app.get('/sum', (req, res) => {
  res.send({ answer: Number(req.query.a) + Number(req.query.b) });
});

app.get('/sum/:a/:b', (req, res) => {
  res.send({ answer: Number(req.params.a) + Number(req.params.b) });
});

app.get('/test', (req, res) => {
  res.send({ answer: 2 ** Number(req.body.n) });
});

app.get('/test/:b', (req, res) => {
  let arr = [2 ** Number(req.body.n), Number(req.params.b), Number(req.query.a)];
  res.send({ answer: arr.sort((a, b) => (a - b)) });
});
// function(a, b){return a-b} ฟังก์ชั้นเปรียบเทียบน้อยมาก

app.listen(8000, () => {
  console.log("Server is running");
});