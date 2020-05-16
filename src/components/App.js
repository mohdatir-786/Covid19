import React from "react";
import { Router,Route ,Switch} from "react-router-dom";
import Header from "./Header";
import history from "./history";
import GridPosts from "./Gridposts";
import Sign_up from "./Sign_up";
import Login from "./Login";
import UserEdit from "./UserEdit";
import UserProfile from "./UserProfile";
import HelperStats from "../components/Stats/HelperComponent";
import CardsContent from "../components/Stats/CardsContent";
const App =()=>{
    return <Router history={history}>
                <Header />
                <Switch>
                    <Route path="/userEdit" exact component={UserEdit}/>
                    <Route path="/userProfile" exact component={UserProfile}/>
                    <Route path="/register" exact component={Sign_up}/>
                    <Route path="/Login" exact component={Login}/>
                    <Route path="/" exact component={GridPosts}/>
                    <Route path="/stats/:country" exact component={HelperStats}/>
                    <Route path="/world" exact component={CardsContent}/>
                </Switch>
        </Router>

};
export default App;