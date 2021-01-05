const socketio = require('socket.io');

function io(server){
    const io = socketio(server);
    io.on('connection',(socket)=>{
        console.log('New user connected');
        socket.username = 'anonymous';
        socket.on('message',(data)=>{
            console.log(data);
            io.sockets.emit('retrive',{message:data.message,username:socket.username});

        });
        socket.on('change_name',(data)=>{
            socket.username = data.username;
        })
    });
    return io;
}
module.exports = io;