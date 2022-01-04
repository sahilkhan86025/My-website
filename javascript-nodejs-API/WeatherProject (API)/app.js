const express = require("express");

const app = express();

const https = require("https");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}))


app.get("/", function(req,res){
res.sendFile(__dirname+"/index.html")


});
app.post("/", function(req, res){
  console.log(req.body.cityName)

  const querry = req.body.cityName;
  const appId = "50ac56e77cdee51dc962508287f3af97";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+querry+"&appid="+appId;
  https.get(url, function(response){
      console.log(response);
  response.on("data", function(data){
  const weatherData= JSON.parse(data);
  const temp = weatherData.main.temp;
  const weatherDescription = weatherData.weather[0].description;
  const icon = weatherData.weather[0].icon;
  const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

  res.write("<h1>The weather in "+querry+" is"+temp+"degree Celsius</h1>");
  res.write("<h3>The weather description is "+weatherDescription+icon+"</h3>");
  res.write("<img src="+imageUrl+">");
  res.send();


  })
})
})
app.listen(3000, function(){
  console.log("app is running om server 3000");
})
