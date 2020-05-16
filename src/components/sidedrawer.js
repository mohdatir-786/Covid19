import React from 'react';
import clsx from 'clsx';
import {logout} from "../Actions/authAction";
import {connect} from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import {SwipeableDrawer} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import history from "./history";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

 function TemporaryDrawer(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({

        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {
                    props.isAuth ?
                        <>
                            <div style={{border:"1px solid black"}}>
                                <ListItem button onClick={()=>history.push("/userProfile")} key={1}>
                                    <ListItemText primary={localStorage.getItem("email")} />
                                </ListItem>
                                </div>
                                <div style={{border:"1px solid black"}}>
                                <ListItem button onClick={() => props.logout()} key={2}>
                                    <ListItemText primary={'Logout'}/>
                                </ListItem>
                                </div>
                        </>
                        :
                        <>
                            <ListItem button onClick={()=>history.push("/register")} key={1}>
                                <ListItemText primary="Register" />
                            </ListItem>
                            <ListItem button onClick={()=>history.push("/login")} key={1}>
                                <ListItemText primary="Login" />
                            </ListItem>
                        </>
                }
            </List>
        </div>
    );

    return (
        <div>
            <React.Fragment key={'right'}>
                <Button onClick={toggleDrawer('right', true)}>
                    <MenuIcon style={{color:'white'}}/>
                </Button>
                <SwipeableDrawer
                    anchor={'right'}
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                    onOpen={toggleDrawer('right', true)}
                >
                    {list('right')}
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}
export default connect(null,{logout})(TemporaryDrawer);