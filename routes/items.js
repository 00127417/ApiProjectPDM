var express = require('express');
var router = express.Router();
var items = require('../models/Item');

router.put('/item', function(req,res,next){

    let data = {
      number: req.body.number,
      sound: req.body.sound,
      level: req.body.level
    }
  
    var item = new items(data);
  
    item.save((err, item)=>{
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

router.get('/items', function(req, res, next) {
items.find({}, (err,docs)=>{
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

  module.exports = router;