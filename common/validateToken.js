var jwt = require('jsonwebtoken')
function validateToken(req,res,next){
    var token = req.headers.authorization
    if(token){
        jwt.verify(token,"appToken",function(e,s){
            if(e){
                throw new Error("Invalid Token")
                //res.send("Invalid Token")
            }else{
                next();
            }
        })
    }else{
        throw new Error("Token Missing")
        //res.send("token missing")
    }
}
module.exports = validateToken