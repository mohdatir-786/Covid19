import React from 'react';
import clsx from 'clsx';
import {logout} from "../Actions/authAction";
import {connect} from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from "react-router-dom";

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
                            <Link to="/userProfile" className="item">
                                <div style={{border:"1px solid black"}}>
                                <ListItem button key={1}>
                                    <ListItemText primary={localStorage.getItem("email")} />
                                </ListItem>
                                </div>
                                <div style={{border:"1px solid black"}}>
                                <ListItem button onClick={() => props.logout()} key={2}>
                                    <ListItemText primary={'Logout'}/>
                                </ListItem>
                                </div>
                            </Link>
                        </>
                        :
                        <>
                            <Link to="/Sign_up" className="item">
                                Sign_up
                            </Link>
                            <Link to="/Login" className="item">
                                Login
                            </Link>
                        </>
                }
            </List>
        </div>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
export default connect(null,{logout})(TemporaryDrawer);