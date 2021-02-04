import React , {useEffect, useState} from 'react'
import queryString from 'query-string';
import io from 'socket.io-client';
import '../style/chat.css'
import InfoBar from './InfoBar';
import Messages from './Messages'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
let socket;
const Chat = ({location}) => {
    const useStyles = makeStyles((theme) => ({
        box: {
            height:"100vh"
        }
      }));
    const classes = useStyles();
    const [name , setName] = useState('');
    const [room , setRoom] = useState('');
    const [message , setMessage] = useState('');
    const [messages , setMessages] = useState([]);
    const EndPoint = "https://chat-application00.herokuapp.com/" 
    useEffect (()=>{
        const {name , room} = queryString.parse(location.search);
        console.log(name);
        setName(name);
        setRoom(room);
        socket = io(EndPoint, { transports: ['websocket', 'polling', 'flashsocket'] });
        socket.emit('join' , {name , room},()=>{
        });
        return () => {
            socket.emit("disconnect");
            socket.off();
        }
    }, [EndPoint , location.search]);
    useEffect(()=>{
        socket.on('message' , (message) => {
            setMessages([...messages , message])
        })
    }, [messages]);
    const sendMessage = (e) => {
        e.preventDefault();
        if(message){
            socket.emit('sendMessage' , message , () => setMessage(''));
            document.getElementById('standard-full-width').value  = '';
        }
    }
    // console.log(message , messages);
    return (
        <Container maxWidth="sm">
            <Box display="flex" justifyContent="center" flexDirection="column" className={classes.box}>
                <InfoBar name={name} room={room}></InfoBar>
                <Messages 
                    messages={messages} 
                    name={name} 
                    setMessage={setMessage} 
                    sendMessage={sendMessage}
                    >
                </Messages>
            </Box>
        </Container>
    )
    
}

export default Chat
