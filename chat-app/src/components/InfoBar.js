import React from 'react'
import '../style/infoBar.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LensRoundedIcon from '@material-ui/icons/LensRounded';
import Box from '@material-ui/core/Box';
function InfoBar({name , room}) {
    const useStyles = makeStyles((style) => ({
        AppBar :{
            backgroundColor:"#4a148c"
        },
        menuButton: {
          marginRight: style.spacing(2),
        },
        title: {
          flexGrow: 1,
          marginLeft:style.spacing(3),
          textTransform: 'capitalize'
        },
        icon:{
            color:"#00e676"
        }
      }));
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.AppBar}>
            <Toolbar className={classes.ToolBar}>
                <LensRoundedIcon  className={classes.icon} fontSize="small" />
                <Box>
                    <Typography variant="h6" className={classes.title}>
                        {name}
                    </Typography>
                    <Typography variant="subtitle1" className={classes.title}>
                        {room}
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default InfoBar
