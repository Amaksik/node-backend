'use strict';
var express = require('express');
var userscontroller = require("./userscontroller")

var app = express();
let port = process.env.PORT || 3000;

app.use(express.json())    // <==== parse request body as JSON


app.get('/users', function(req, res) {
  res.send(userscontroller.getUsers());
});

app.get('/users/:id', function(req, res) {
  
  res.send(userscontroller.getUserById(req.params.id));

});
app.put('/users/:id', function(req, res) {

  let id = userscontroller.getUserById(req.params.id)
  userscontroller.removeUser(id);
  userscontroller.addUser(req.body);
  res.sendStatus(200);
});

app.delete('/users/:id', function(req, res) {

  userscontroller.removeUser(req.params.id);
  res.sendStatus(200);
});


app.post('/users', function(req, res) {
  let newuser = req.body;

  if(!newuser){
    res.status(404)
    res.send("not provided");}
  else{
    try{
      userscontroller.getUserId(newuser.name, newuser.surname);
      res.status(400)
      res.send("already exists");
    }
    catch{
      try{
        newuser.name;
        newuser.surname;
        newuser.age;
        userscontroller.addUser(newuser);
        res.sendStatus(200);
      }
      catch{
        res.status(400)
        res.send("not enough info");
      }
      
    }
    
  }
});

app.get('/', function(req, res) {
  res.send("Welcome to Bac-End magic");
});


app.listen(port, function() {
  console.log(`Example app listening on port http://localhost:${port}!`);
});
