var express = require('express');
var router = express.Router();
var users =  require('../models/User')

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
  var username = req.params.username || "";
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


module.exports = router;
