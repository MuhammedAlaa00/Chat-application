const {addUser , removeUser , getUser , getUserInRoom} = require('./users.js')
const express = require('express');
const socketio = require('socket.io');
const cors  = require('cors')
const http =  require('http');
const port =  process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
server.listen(port , ()=> console.log(`server has started on port ${port}`));
const router = require('./router');
app.use(router);
app.use(cors());
const Io = socketio(server);
Io.on("connection" , (socket)=>{
    socket.on('join' , ({name , room}, callback)=>{
        const {error , user} = addUser({id:socket.id , name , room});
        if (error) return callback(error)
        socket.emit('message' , {user:'admin' , text:`${user.name}, welcome to ${user.room}`});
        socket.broadcast.to(user.room).emit('message' , {user:'admin' , text:`${user.name} , has joined!`});
        socket.join(user.room)
        console.log(user.name , user.room);
        Io.to(user.room).emit('RoomData' , {room:user.room , users: getUserInRoom(user.room)} )
        callback();
    });
    socket.on('sendMessage' , (message , callback) => {
        const user = getUser(socket.id);
        Io.to(user.room).emit('message' , {user : user.name ,  text: message});
        Io.to(user.room).emit('RoomData' , {room : user.room ,  users:getUserInRoom(user.room)});
        callback();
    });
    socket.on("disconnect" , () => {
     const user = removeUser(socket.id);
     if(user){
         Io.to(user.room).emit('message' , {user:'admin' , text : `${user.name} has left..`})
     }
    })
});