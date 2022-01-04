const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");

});
app.post('/', (req, res) => {

var num1= Number(req.body.num1);
var num2= Number(req.body.num2);
var sum= num1 + num2;
res.send("RESULT" + sum);

});

app.listen(port, () => {
  console.log(`calculator app listening at http://localhost:${port}`);
});
