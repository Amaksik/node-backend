'use strict';
var express = require('express');
var cors = require('cors')
var userscontroller = require("./controller_users")
var countriescontroller = require("./controller_countries")

var app = express();
let port = process.env.PORT || 3000;

app.use(express.json())    // <==== parse request body as JSON
app.use(cors())

app.get('/countries', function(req, res) {
  res = addheaders(res);
  res.send(countriescontroller.getcountries());
});

app.get('/users', function(req, res) {
  res = addheaders(res);
  res.send(userscontroller.getUsers());
});

app.post('/users/autorize', cors(), function(req, res) {
  let credentials = req.body;
  
  if(!credentials){
    res.status(404)
    res.send("not provided");}
  else{
    try{
      let id =  userscontroller.autorize(credentials.email, credentials.password);
      res.status(200)
      res.send(JSON.stringify(id));
    }
    catch{
        res.status(404)
        res.send("user not found");
    }
    
  }
});


app.get('/users/:id', function(req, res) {
  res = addheaders(res);
  res.send(userscontroller.getUserById(req.params.id));

});
app.put('/users/:id', function(req, res) {
  res = addheaders(res);
  let id = userscontroller.getUserById(req.params.id)
  userscontroller.removeUser(id);
  userscontroller.addUser(req.body);
  res.sendStatus(200);
});

app.delete('/users/:id', function(req, res) {
  res = addheaders(res);
  userscontroller.removeUser(req.params.id);
  res.sendStatus(200);
});


app.post('/users', cors(), function(req, res) {
  let newuser = req.body;
  console.log("1");
  res = addheaders(res);
  if(!newuser){
    console.log("2");
    res.status(404)
    res.send("not provided");}
  else{
    try{
      console.log("3");
      userscontroller.getUserId(newuser.name, newuser.surname);
      res.status(400)
      res.send("already exists");
    }
    catch{
      try{
        console.log("4");
        newuser.name;
        newuser.surname;
        newuser.age;
        userscontroller.addUser(newuser);
        res.status(200)
        var userid = userscontroller.getUsers().length
      res.send(JSON.stringify(userid));
      }
      catch{
        console.log("5");
        res.status(400)
        res.send("not enough info");
      }
      
    }
    
  }
});

app.get('/', function(req, res) {
  res = addheaders(res);
  res.send("Welcome to Bac-End magic");
});


app.listen(port, function() {
  console.log(`Example app listening on port http://localhost:${port}!`);
});

function addheaders(obj){
  obj.setHeader("Access-Control-Allow-Origin", "*");
  obj.setHeader("Access-Control-Allow-Methods", "*");
  obj.setHeader("Access-Control-Allow-Headers", "*");
  //obj.header("Access-Control-Allow-Origin", "Origin, X-Requested-With, Content-Type, Accept");
  return obj;
}