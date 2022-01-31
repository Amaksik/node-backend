'use strict';
const swaggerUi = require('swagger-ui-express');
const docs = require('./docs');

var express = require('express');
var cors = require('cors')
var userscontroller = require("./controller_users")
var countriescontroller = require("./controller_countries")

var app = express();
let port = process.env.PORT || 3000;

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(docs));

app.use(express.json())    // <==== parse request body as JSON

app.use(cors())

app.get('/countries', function(req, res) {
  res = addheaders(res);
  res.send(countriescontroller.getcountries());
});
app.post('/countries', cors(), function(req, res) {
  let newcountry = req.body;
  
  if(!newcountry){
    res.status(400)
    res.send("Country is not provided");}
  else{
    try{
      countriescontroller.addcountry(newcountry)
      res.status(201)
      res.send(JSON.stringify(`${newcountry} added`));
    }
    catch{
        res.status(409)
        res.send("country already exists");
    }
    
  }
});


app.get('/users', function(req, res) {
  res = addheaders(res);
  res.send(userscontroller.getUsers());
});

app.post('/users/autorize', cors(), function(req, res) {
  let credentials = req.body;
  
  if(!credentials){
    res.status(400)
    res.send("Credentials are not provided");}
  else{
    try{
      let id =  userscontroller.autorize(credentials.email, credentials.password);
      res.status(200)
      res.send(JSON.stringify(id));
    }
    catch{
        res.status(404)
        res.send("User not found");
    }
    
  }
});


app.get('/users/:id', function(req, res) {
  res = addheaders(res);
  try{
    res.status(200).send(userscontroller.getUserById(req.params.id));
  }
  catch{
    res.status(404).send("User not found");
  }
  

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
  try{
    userscontroller.removeUser(req.params.id);
    res.sendStatus(200);
  }
  catch{
    res.status(404).send("User not found");
  }

});


app.post('/users', cors(), function(req, res) {
  let newuser = req.body;
  res = addheaders(res);
  if(!newuser){
    res.status(400)
    res.send("not provided");}
  else{
    try{
      userscontroller.getUserId(newuser.name, newuser.surname);
      res.status(409)
      res.send("already exists");
    }
    catch{
      try{
        newuser.name;
        newuser.surname;
        newuser.age;
        userscontroller.addUser(newuser);
        res.status(200)
        var userid = userscontroller.getUsers().length
      res.send(JSON.stringify(userid));
      }
      catch{
        res.status(422)
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
  console.log(`Example app listening on port http://localhost:${port}`);
});

function addheaders(obj){
  obj.setHeader("Access-Control-Allow-Origin", "*");
  obj.setHeader("Access-Control-Allow-Methods", "*");
  obj.setHeader("Access-Control-Allow-Headers", "*");
  //obj.header("Access-Control-Allow-Origin", "Origin, X-Requested-With, Content-Type, Accept");
  return obj;
}