import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Pages/login";
import Name from "./Pages/information/name";
import Email from "./Pages/information/email";
import Mobile from "./Pages/information/mobile";
import Thanks from "./Pages/information/thanks";
import { AuthContextProvider} from "./context/auth/authContext";
import axios from "axios";

// axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.baseURL = 'https://yaapbackend.herokuapp.com';
axios.defaults.params = {};


const App = () => {

  return (
    <Router>
      <AuthContextProvider>
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/info/name" component={Name} />
          <Route exact path="/info/email" component={Email} />
          <Route exact path="/info/mobile" component={Mobile} />
          <Route exact path="/info/thanks" component={Thanks} />
        </div>
      </AuthContextProvider>
    </Router>
  )
}

export default App
