var {regStudentDAO,getStudentDAO, loginDAO} = require('../dao/studentDAO')
async function regStudentService(data){
console.log("regStudentService")
var result = await regStudentDAO(data);
console.log('service receive the result from dao send to controller')
return result;
}

async function loginService(data){
   const result = await loginDAO(data)
   return result;
}

async function getStudentService(){
console.log("getStudentService")
var result = await getStudentDAO();
result = result.map((obj)=> {
    delete obj.pwd
    return obj;
})
return result;
}

module.exports = {
    regStudentService,
    getStudentService,
    loginService
}