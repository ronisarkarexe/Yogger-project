import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import ContactUs from './components/Home/ContactUs/ContactUs';
import Book from './components/Booking/Book/Book';
import Login from './components/Login/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import ManageServices from './components/Admin/ManageServices/ManageServices';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import AddService from './components/Admin/AddService/AddService';
import OrderList from './components/Admin/OrderList/OrderList';
import BookingList from './components/Booking/BookingList/BookingList'
import Footer from './components/Shareds/Footer/Footer';
import Admin from './components/Admin/Admin/Admin';

export const UserContext = createContext()

function App() {

  const [loggedInUser, setLoggedInUser] =useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
          <Route path="/about">
            <Footer></Footer>
          </Route>
          <Route path="/manageServices">
            <ManageServices></ManageServices>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/orderList">
            <OrderList></OrderList>
          </Route>
          {/* <Route path="/bookingList">
           <BookingList></BookingList>
          </Route> */}
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
