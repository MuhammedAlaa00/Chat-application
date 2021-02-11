import React from 'react'
import '../style/input.css'
import Input from '@material-ui/core/Input';
import Box from '@material-ui/core/Box';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import {makeStyles } from '@material-ui/core/styles';
function InputCom({setMessage  , sendMessage}) {
    const useStyles = makeStyles((style)=> ({
        Input:{
            height: "3rem",
            paddingLeft : style.spacing(4),
            borderRadius:'0'
        }
    }))
    const classes = useStyles(); 
    return (
        <form>
            <Box display="flex">
                <Box width={1}>
                    <Input
                        className={classes.Input}
                        id="standard-full-width"
                        rowsMax={4}
                        fullWidth
                        placeholder="type message..."
                        type="text"
                        onChange={ e => setMessage(e.target.value)}
                        onKeyPress={e => e.key === 'Enter' ? sendMessage(e): null}
                    />
                </Box>
                <Box>
                <Button
                    className={classes.Input}
                    variant="contained"
                    color="primary"
                    endIcon={<SendIcon/>}
                    onClick={(e) => sendMessage(e)}>
                    Send
                </Button>
                </Box>
            </Box>
        </form> 
    )
}

export default InputCom
