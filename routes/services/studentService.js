var {regStudentDAO,getStudentDAO} = require('../dao/studentDAO')
function regStudentService(){
console.log("regStudentService")
regStudentDAO();
}

function getStudentService(){
console.log("getStudentService")
getStudentDAO();
}

module.exports = {
    regStudentService,
    getStudentService
}