var express = require('express');
var router = express.Router();
var Message = require('../models/message');

router.get('/',function (req,res,next) {
   Message.find()
       .exec(function (err,messeges) {
           if (err){
               return res.status(500).json({
                   title: 'An error occurred',
                   error: err
               });
           }
           res.status(200).json({
               messege : 'Success',
               obj: messeges
           })
       });
});

router.post('/',function (req,res,next) {
    var message = new Message({
        content: req.body.content
    });
    message.save(function (err,message) {
        if (err){
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
           message : 'Message saved ',
           obj : message
        });
    });
});

module.exports = router;