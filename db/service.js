const service = require("./test/service");

const services = {};

const queryAll = async function queryAll(client,options){
    return new Promise((resolve,reject)=>{
        let db = client.defaultDb;
        let collection = db.collection(options.collection);
        collection.find({}).toArray((err,items)=>{
            if(err){
                reject(err);
                throw(err)
            }
            resolve(items)
        })
    })
}


services.queryAll = queryAll;

module.exports = services ;