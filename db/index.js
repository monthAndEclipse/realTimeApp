const getClient = require('./client');
const services = require('./service');

const clientPromist = getClient();
clientPromist.then((client)=>{
    const queryAllPromise = services.queryAll(client,{collection:"documents"});
   queryAllPromise.then((items)=>{
       console.log(items);
       client.close();
   })
})

