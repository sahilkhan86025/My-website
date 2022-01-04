const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}))
app.get("/", (req,res) =>{

  res.sendFile(__dirname + "/bmi.html");

})
app.post("/", (req,res) =>{

  var height = Number(*re.body.height);
  var weight = Number(*re.body.weight);

})
app.listen(port, () => {
  console.log(`calculator app listening at http://localhost:${port}`);
});
