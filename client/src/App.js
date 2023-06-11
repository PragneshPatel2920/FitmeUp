import React, {useReducer, createContext} from 'react'
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import AboutUs from './components/AboutUs';
import Signup from "./components/Signup";
import ErrorPage from "./components/Errorpage";
import Logout from "./components/Logout";
import Footer from './components/Footer';
import Admin from './components/Admin';
import Exersise from './components/services/Exersise';
import Calory from './components/services/Calory';
import Diet from './components/services/Diet';
import Training from './components/services/Training';
import { initialState, reducer } from "./reducer/UseReducer";


// we create a contextAPI 
export const UserContext = createContext();

  

const Routing = () => {
  
  return (
    <>
       <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/services/exersise">
        <Exersise />
      </Route>

      <Route path="/services/diet">
        <Diet />
      </Route>

      <Route path="/services/training">
        <Training />
      </Route>

      <Route path="/services/calory">
        <Calory />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/aboutus">
        <AboutUs />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route>
        

      <Route path="/admin">
        <Admin />
      </Route>

      <Route path="/logout">
        <Logout />
      </Route>
      
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
    </>
  )
}

const App = () => {

  //* we use useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
   
      <UserContext.Provider value={{state, dispatch}}>
        
        <Navbar />
        <Routing />
        <Footer/>

      </UserContext.Provider>
  )
}

export default App

