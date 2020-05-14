import React from "react";
import { Router,Route ,Switch} from "react-router-dom";
import Header from "./Header";
import history from "./history";
import GridPosts from "./Gridposts";
import Sign_up from "./Sign_up";
import Login from "./Login";
import UserEdit from "./UserEdit";
import UserProfile from "./UserProfile";
const App =()=>{
    return <Router history={history}>
                <Header />
                <Switch>
                    <Route path="/userEdit" exact component={UserEdit}/>
                    <Route path="/userProfile" exact component={UserProfile}/>
                    <Route path="/Sign_up" exact component={Sign_up}/>
                    <Route path="/Login" exact component={Login}/>
                    <Route path="/" exact component={GridPosts}/>

                </Switch>
        </Router>

};
export default App;