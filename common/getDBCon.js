var mongo = require('mongodb')
async function getDBCon(){
    var url = "mongodb+srv://u1:p1@9am.cfvq7n5.mongodb.net/"
    //mongoDB server- Database -Collection -Documents
    var mongoClient = mongo.MongoClient
    const server = await mongoClient.connect(process.env.DB_CONN_URL)
    var db = server.db("school")
    return db;
}
module.exports = getDBCon