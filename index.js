const {MongoClient} = require('mongodb')

const DB_url = 'mongodb://localhost:27017';

MongoClient.connect(DB_url,(err,client)=>{
    if(err) throw err;

    console.log(client)

})