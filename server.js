const express = require("express");

const app = express();
app.get("/", function(req,response){
response.send("Hi Tersia")
}) 

app.listen(3000,  () => {
  console.log("Server has started!");
});

app.get("/one", function (req, res) {
  res.send("Hello World!");
});

app.get("/chocolate", function (req, res) {
  res.send("Mm chocolate :O");
});