var express = require('express');
var router = express.Router();
var ques = require('../models/Question');

router.put('/question', function(req,res,next){

    let data = {
      number: req.body.number,
      name: req.body.name,
      sound: req.body.sound,
      level: req.body.level,
      answer: req.body.answer,
      optiona: req.body.optiona,
      optionb: req.body.optionb,
      optionc: req.body.optionc
    }
  
    var question = new ques(data);
  
    question.save((err, item)=>{
      if(err){
        res.status(400).json({
          "success": false
        })
      }else{
        res.status(200).json({
          "success": true,
          "itemInserted": item
        })
      }
    })

  });

router.get('/questions', function(req, res, next) {
ques.find({}, (err,docs)=>{
    if(err){
    res.status(400).json({"success": false})
    }else{
    res.status(200).json({
        docs
    })
    }
})
});

  module.exports = router;