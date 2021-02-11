import React from 'react'
import '../style/messages.css';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';
import Paper from '@material-ui/core/Paper';
import InputCom from './InputCom';
function Messages({messages ,  name , setMessage , sendMessage}) {
   const Messages = messages.map((message , i) => <div key={i}><Message message={message} name={name}></Message></div>)
   return (
    <Paper elevation={3}>
        <ScrollToBottom className="messages">
            {
                    Messages  
            }
        </ScrollToBottom>
        <InputCom setMessage={setMessage} sendMessage={sendMessage}></InputCom>
    </Paper>
    )
}

export default Messages
