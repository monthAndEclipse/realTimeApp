const MongoClient = require('mongodb').MongoClient;

const ENV = {
    url:'mongodb://root:password@119.23.19.189:27017/',
    dbName : "test" , //defalut
    dbconfig:{
        connectTimeoutMS: 30000,
        useUnifiedTopology: true 
    }
}

async function getClient(options){
    if(typeof options !="undefined"){
        ENV = options;
    }
    return new Promise((resolve,reject)=>{
        MongoClient.connect(ENV.url,ENV.dbconfig,(error,client)=>{
            if(error){
                reject(error);
                throw (error);
            }
            client.ENV = ENV;
            let defaultDb = client.db(ENV.dbName);
            client.defaultDb = defaultDb;
            resolve(client);
        })
    })
}

module.exports = getClient;
