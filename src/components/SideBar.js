import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import history from "./history";
const SideBar = props => {
    return (
        <div style={{position:"sticky", top: '60px',overflowY:" scroll",height:"500px",backgroundColor:"#8FBC8F",width:"300px"}}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button onClick={()=>history.push("/stats/india")}>
                    <ListItemText style={{color:"white"}} primary="India"/>
                </ListItem>
            </List>
            <Divider />
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button onClick={()=>history.push("/stats/us")}>
                    <ListItemText style={{color:"white"}} primary="United States"/>
                </ListItem>
            </List>
            <Divider/>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button onClick={()=>history.push("/stats/italy")}>
                    <ListItemText style={{color:"white"}} primary="Italy"/>
                </ListItem>
            </List>
            <Divider/>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button onClick={()=>history.push("/stats/uk")}>
                    <ListItemText style={{color:"white"}} primary="United Kingdom"/>
                </ListItem>
            </List>
            <Divider/>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button onClick={()=>history.push("/stats/france")}>
                    <ListItemText style={{color:"white"}} primary="France"/>
                </ListItem>
            </List>
            <Divider/>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button onClick={()=>history.push("/stats/spain")}>
                    <ListItemText style={{color:"white"}} primary="Spain"/>
                </ListItem>
            </List>
            <Divider/>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button onClick={()=>history.push("/stats/iran")}>
                    <ListItemText style={{color:"white"}} primary="Iran"/>
                </ListItem>
            </List>
            <Divider/>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button onClick={()=>history.push("/stats/china")}>
                    <ListItemText style={{color:"white"}} primary="China"/>
                </ListItem>
            </List>
            <Divider/>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button onClick={()=>history.push("/stats/turkey")}>
                    <ListItemText style={{color:"white"}} primary="Turkey"/>
                </ListItem>
            </List>
            <Divider/>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button onClick={()=>history.push("/stats/russia")}>
                    <ListItemText style={{color:"white"}} primary="Russia"/>
                </ListItem>
            </List>
        </div>
    )
};

export default SideBar;