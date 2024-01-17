var express = require('express');
var router = express.Router();
var {getStudentService, regStudentService} = require('../services/studentService')

//http://localhost:2020/std/reg-std, post
router.post("/reg-std", function (req, res, next) {//request received
    console.log("reg-std controller")
    //take the data from req
    regStudentService();

    res.send("Hello Sachin")

})

//http://localhost:2020/std/get-std, get
router.get("/get-std", function (req, res, next) {//request received
    console.log("get-std controller")
    //take the data from req
    getStudentService();
    res.send("Hello Dhoni")

})

module.exports = router;