var express = require('express');
var router = express.Router();
var User = require('../models/user');
router.get('/', function (req, res, next) {
    res.render('index');
});

// router.get('/nodemsg/:msg',function (req,res,next) {
//     res.render('node', {key : req.params.msg});
// });

module.exports = router;
