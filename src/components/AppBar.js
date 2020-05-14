import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from "react-router-dom";
import Divider from '@material-ui/core/Divider';
const AppBar = props => {
    return (
        <div style={{position:"sticky", top: '80px',overflowY:" scroll",height:"500px"}}>
            <List component="nav" aria-label="main mailbox folders">
                <Link to="/sign_up">
                    <ListItemText primary="Signup" />

            </Link>


            </List>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button>
                    <ListItemText primary="Trash" />
                </ListItem>
            </List>
            <Divider/>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <ListItemText primary="Inbox" />
                </ListItem>
                <Divider/>
                <ListItem button>
                    <ListItemText primary="Drafts" />
                </ListItem>
            </List>
            <Divider/>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <ListItemText primary="Inbox" />
                </ListItem>
                <Divider/>
                <ListItem button>
                    <ListItemText primary="Drafts" />
                </ListItem>
            </List>
            <Divider/>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <ListItemText primary="Inbox" />
                </ListItem>
                <Divider/>
                <ListItem button>
                    <ListItemText primary="Drafts" />
                </ListItem>
            </List>
            <Divider/>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <ListItemText primary="Inbox" />
                </ListItem>
                <Divider/>
                <ListItem button>
                    <ListItemText primary="Drafts" />
                </ListItem>
            </List>
            <Divider/>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <ListItemText primary="Inbox" />
                </ListItem>
                <Divider/>
                <ListItem button>
                    <ListItemText primary="Drafts" />
                </ListItem>
            </List>
            <Divider/>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <ListItemText primary="Inbox" />
                </ListItem>
                <Divider/>
                <ListItem button>
                    <ListItemText primary="Drafts" />
                </ListItem>
            </List>
            <Divider/>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <ListItemText primary="Inbox" />
                </ListItem>
                <Divider/>
                <ListItem button>
                    <ListItemText primary="Drafts" />
                </ListItem>
            </List>

        </div>
    )
};

export default AppBar;