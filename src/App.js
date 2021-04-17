import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import ContactUs from './components/Home/ContactUs/ContactUs';
import Admin from './components/Admin/Admin/Admin';
import Book from './components/Booking/Book/Book';
import Login from './components/Login/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

export const UserContext = createContext()

function App() {

  const [loggedInUser, setLoggedInUser] =useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h6>Name: {loggedInUser.name}</h6>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/contact">
            <ContactUs></ContactUs>
          </Route>
          <PrivateRoute path="/book/:id">
            <Book></Book>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
