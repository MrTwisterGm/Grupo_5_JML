import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Keyboards from "./pages/keyboards/Keyboards";
import Mouses from "./pages/mouses/Mouses";
import UserList from "./pages/userList/UserList";
import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import "./app.css";

function App() {
  return (
    <Router >
     <Topbar/>
      <div className="container">
        <Sidebar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/keyboards">
            <Keyboards />
          </Route>
          <Route exact path="/mouses">
            <Mouses />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
        </Switch> 
        
      </div>
 
    </Router>
  );
}

export default App;
