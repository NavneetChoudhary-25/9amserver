var express = require('express');
var router = express.Router();
var validateToken = require('../../common/validateToken')
var { getStudentService, regStudentService, loginService, updateStudentService, deleteStudentService } = require('../services/studentService');
const getDBCon = require('../../common/getDBCon');

//http://localhost:2020/std/reg-std, post
router.post("/reg-std", async function (req, res, next) {//request received
    try {
        const { data } = req.body
        console.log("reg-std controller")
        var result = await regStudentService(data);
        //take the data from req
        console.log("controller receive result from service give it to client as response")
        res.send(result)
    } catch (ex) {
        console.error(ex)
        res.send(ex.message)
    }
})

router.post("/login", async function (req, res, next) {
    const { data } = req.body
    const result = await loginService(data)
    res.send(result)
})



//http://localhost:2020/std/get-std, get
router.get(
    "/get-std",
    validateToken,
    async function (req, res, next) {//request received
        console.log("get-std controller")
        //take the data from req
        var result = await getStudentService();
        res.send(result)

    })
router.put(
    "/update-std",
    validateToken,
    async function (req, res, next) {
        var { id } = req.query;
        var { data } = req.body;
        var result = await updateStudentService(id, data);
        res.send(result)
    }
)
router.delete(
    '/delete-std/:id',
    validateToken,
    async function (req, res, next) {
        var { id } = req.params
        var result = await deleteStudentService(id)
        res.send(result)
    }
)

module.exports = router;