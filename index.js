const express = require('express');
const app = express();
//when visiting on the client side,no need to specify this path
app.use(express.static('public'))
const server = app.listen(process.env.PORT||3000,()=>{
    console.log('server stared successfully');
})

require('./socket')(server);
