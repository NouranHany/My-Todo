
//requiring needed modules
const express = require("express");
const bodyParser = require("body-parser");

const localPort = 3000;
let items = [];
//creating an express server application
const app = express();
app.use(express.static("public")); //serving static files via the server
app.use(bodyParser.urlencoded({extended:true})); //help parsing html forms via bodyParser
app.set('view engine','ejs');

//get the home page
app.get("/",function(req,res){

  var date = new Date();
  var day = date.toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long"});
  res.render("index",{day: day, items:items});
});

//add new item to the home page
app.post("/",function(req,res){
  items.push(req.body.newItem);
  res.redirect("/");
});

//attaching server to listen on local port 3000
app.listen(localPort,function(){
  console.log("Server starting on port: " + localPort);
})
