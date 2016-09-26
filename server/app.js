var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded( { extended: true } );
var path = require('path');
var app = express();
var mongoose = require('mongoose');
var PetModel = require('../models.PetModel'); //not necessary to have this here, need it in routers though!
var portDecision = process.env.PORT || 8000;

//routes

var indexRouter = require('../routers/indexRouter');
var petRouter = require('../routers/pets');
app.use('/pets', petRouter);


//json body parser
app.use(bodyParser.json());


//data base connection
var mongoURI = "mongodb://localhost:27017/Pets";
mongoose.connect(mongoURI);


//listen and port decision
app.listen(portDecision,function(){
console.log('Listening!', portDecision);
});

// // app.get --  serves the index -- get params
app.get( '/', function( req, res ){
res.sendFile( path.resolve( 'public/index.html' ) );
});


app.get('/viewAll', function (req,res){
console.log('in get all router ');
petModel.find({}, function(err, PetResults) {
    if(err){
      console.log('error occurred:', err);
      res.sendStatus(500);
    }else{
      res.send(PetResults);
      console.log(PetResults);
    }
  });
});

var newPet = require('../models/addPet');

app.post('/savePet', function(req,res){
  console.log('in add pet post route');

  var addPet = newPet(req.body);
  console.log('addPet : ', req.body);

  addPet.save(function(err){
  if (err) {
    console.log(err);
    res.sendStatus(500);
  }else {
    console.log('connected to the db!');
    res.sendStatus(200);
  }
});
});
app.use( express.static( 'public' ) );
