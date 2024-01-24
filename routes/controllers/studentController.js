var express = require('express');
var router = express.Router();
var validateToken = require('../../common/validateToken')
var { getStudentService, regStudentService, loginService, updateStudentService, deleteStudentService, getStdByIdService } = require('../services/studentService');
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
    try {
        const { data } = req.body
        const result = await loginService(data)
        res.send(result)
    } catch (ex) {
        console.log("login", ex);
        res.send(ex.message)
    }
})



//http://localhost:2020/std/get-std, get
router.get(
    "/get-std",
    validateToken,
    async function (req, res, next) {//request received
        try {
            console.log("get-std controller")
            //take the data from req
            var result = await getStudentService();
            res.send(result)
        } catch (ex) {
            console.log("get-std", ex);
            res.send(ex.message)
        }

    })
router.put(
    "/update-std",
    validateToken,
    async function (req, res, next) {
        try {
            var { id } = req.query;
            var { data } = req.body;
            var result = await updateStudentService(id, data);
            res.send(result)
        } catch (ex) {
            console.log("update-std", ex);
            res.send(ex.message)
        }
    }
)
router.delete(
    '/delete-std/:id',
    validateToken,
    async function (req, res, next) {
        try {
            var { id } = req.params
            var result = await deleteStudentService(id)
            res.send(result)
        } catch (ex) {
            console.log("delete-std", ex);
            res.send(ex.message)
        }
    }
)
router.get('/get-std-by-id', validateToken, async function (req, res, next) {
    try {
        var { id } = req.query
        const result = await getStdByIdService(id)
        res.send(result)
    } catch (ex) {
        console.log("get-std-by-id", ex);
        res.send(ex.message)
    }
})

module.exports = router;