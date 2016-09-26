var express = require('express');
var router = require('express').Router();
var newPet = require('../../models/addPet');
var PetModel = require('../models.PetModel');

router.get('/', function(req, res) {
    console.log('in get all router ');
    res.sendStatus(200);
  });

router.post('/',function(req, res) {
  console.log('in pets post');
  res.sendStatus(200);
});

router.get('/viewAll', function(req, res) {
    console.log('in get all router ');
    petModel.find({}, function(err, PetResults) {
        if (err) {
            console.log('error occurred:', err);
            res.sendStatus(500);
        } else {
            res.send(PetResults);
            console.log('PetResults');
        }
    });
});


router.post('/savePet', function(req, res) {
    console.log(' add pet post route');
    var addPet = newPet(req.body);
    console.log('addPet : ', req.body);
    addPet.save(function(err) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            console.log('connected to the db!');
            res.sendStatus(200);
        }
    });
});

module.exports = router;
});
