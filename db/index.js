const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://root:password@119.23.19.189:27017/';
const dbName = 'test';
const config = {
    connectTimeoutMS: 30000,
    useUnifiedTopology: true
}
const insertDocuments = function(db,callback){
    // Get the documents collection
    const collection = db.collection('documents');
    // Insert some documents
    collection.insertMany([
        {a : 1}, {a : 2}, {a : 3}
        ],
        function(err, result) {
        if(err){
            throw(err)
        }
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
}



MongoClient.connect(url,config,(err,client)=>{
    if(err){
        throw (err);
        return;
    }
    console.log("connect successfully")
    const db = client.db(dbName);
    insertDocuments(db,function(result){
        console.log(result)
        client.close();
    });
    }
)


