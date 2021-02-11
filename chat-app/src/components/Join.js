import React , {useState} from 'react';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../style/join.css'
function Join() {
    const [name , setName] = useState('');
    const [room , setRoom] = useState('');
    const useStyles = makeStyles ((theme) => ({
        Paper : {
            padding : theme.spacing(8)
        },
        btn :{
            textTransform:'capitalize',
            border:'none',
            outline:'none'
        }
    })) 
    const classes = useStyles();
    return (
        
            <div className="container">
                <div className="main-box d-flex justify-content-center align-items-center">
                <Paper elevation={3} className={classes.Paper}>
                    <div className="child-box d-flex justify-content-center align-items-center flex-column">
                        <div>
                            <h2 className="mb-3 join-head">Log In The Room</h2>
                        </div>
                        <div>
                            <label>Name*-</label>
                            <input placeholder="" className="joinInput form-control mb-2" type="text" onChange={e => setName(e.target.value)}/>
                        </div>
                        <div>
                            <label>Room Name*-</label>
                            <input placeholder="" className="joinInput form-control mb-3" type="text" onChange={e => setRoom(e.target.value)}/>
                        </div>
                        <Link onClick={e => (!name || !room) ? e.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
                            <Button variant="contained" color="primary" className={classes.btn}>
                                    Sign In
                            </Button>
                        </Link>
                    </div>
                </Paper>
                </div>
            </div>
    )
}

export default Join
