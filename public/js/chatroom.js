(function(){
    let socket = io.connect('http://localhost:3000/');
    let message = document.querySelector('#message');
    let messageBtn = document.querySelector('#messageBtn');
    let messageList = document.querySelector('#message-list')
    let username = document.querySelector('#username');
    let usernameBtn = document.querySelector('#usernameBtn');
    
    usernameBtn.addEventListener('click',function(){
        socket.emit('change_name',{username:username.value});
    },false)

    messageBtn.addEventListener('click',function(){
        console.log(message.value)
        socket.emit('message',{message:message.value});
    },false);

    socket.on('retrive',(data)=>{
        console.log(data);
        let template = `<li class='list-group-item'>${data.username+":    "+data.message}</li>`;
        messageList.innerHTML = messageList.innerHTML +template;
    });

}())