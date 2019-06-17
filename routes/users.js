var express = require('express');
var router = express.Router();
var users =  require('../models/User');
var items = require('../models/Item');
var ques = require('../models/Question');
var patient = require('../models/Patient');

/* GET users listing. */
router.get('/users', function(req, res, next) {
  users.find({}, (err,docs)=>{
    if(err){
      res.status(400).json({"success": false})
    }else{
      res.status(200).json({
        "success": true,
        "docs": docs
      })
    }
  })
});

router.get('/:username', function(req,res,next){
  console.log(req.params.username);
  var username = req.body.username || "";
  if (username == ""){
    res.status(400).json({
      "success1": false
    })
  }else{
    users.findOne({username: username},(err,user)=>{
      if(err){
        res.status(400).json({
          "success": false
        })
      }else{
        res.status(200).json({
          "success": true,
          "user": user
        })
      }

    })
  }
})

router.put('/', function(req,res,next){

  let data = {
    username: req.body.username,
    password: req.body.password,
    type: req.body.type,
    patients: req.body.patients
  }

  var user = new users(data);

  user.save((err, iUser)=>{
    if(err){
      res.status(400).json({
        "success": false
      })
    }else{
      res.status(200).json({
        "success": true,
        "userInserted": iUser
      })
    }
  })

})

router.put('/user/patient', function(req,res,next){
  
  var username = req.body.username || "";
  if(username == ""){
    res.status(400).json({
      "success":false
    })
  }else{
    let patientDat = {
      name: req.body.name,
      date: req.body.date,
      level: req.body.level,
      items:[ {sound:'A.mp3', level: 1, success: 0},
      {sound:'E.mp3', level: 1, success: 0}]
    }
    
    var iPatient = new patient(patientDat)
    users.findOne({username: username}, (err, user)=>{
      if(err){
        res.status(400).json({
          "success": false
        })
      }else{
        console.log(iPatient)
        user.patients.push(iPatient)
        user.save((err, iUser)=>{
          if(err){
            res.status(400).json({
              "success": false
            })
          }else{
            res.status(200).json({
              "success": true,
              "userInserted": iUser
            })
          }
        })
      }
    })
  }
})
module.exports = router;