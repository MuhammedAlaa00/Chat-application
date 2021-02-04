import React from 'react'
import '../style/messages.css'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
function Message({message :{user , text} , name}) {
    let IsSentByCurrentUser = false;
    const style  = {
        fontWeight:"700"
    }
    const TrimedName = name.trim().toLowerCase();
    if(user === TrimedName || user === "admin")
    {
        console.log('admin');
        IsSentByCurrentUser = true
    }
    return (
        IsSentByCurrentUser 
        ? 
        (  
            <Box display="flex" justifyContent="end" ml={2} mt={3} mb={3}>
                <Box display="flex" alignItems="center">
                    <Box boxShadow={3} className="messageBox mr-2" color="#311b92">
                        <Typography variant="body1" style={style}>{text}</Typography>
                    </Box>
                    <Box color="#311b92">
                        <Typography variant="body1">{user}</Typography>
                    </Box>
                </Box>
            </Box>
        ) 
        : (
            <Box display="flex" flexDirection="row-reverse" mr={2} mt={3} mb={3}>
                <Box display="flex" alignItems="center">
                    <Box boxShadow={3} className="messageBox mr-2" color="#311b92">
                        <Typography variant="body1" style={style}>{text}</Typography>
                    </Box>
                    <Box color="#311b92">
                        <Typography variant="body1">{TrimedName}</Typography>
                    </Box>
                </Box>
            </Box>
        )
    )
}

export default Message
