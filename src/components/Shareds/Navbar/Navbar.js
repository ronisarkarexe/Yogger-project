import React, { useState } from 'react';
import './Navbar.css';
import icon from '../../../Icon/lotus.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../App';


const Navbar = () => {

   const [loggedInUser, setLoggedInUser] = useContext(UserContext)
   console.log(loggedInUser)
   const [admin, setAdmin] = useState(false)

   return (
      <section>
         <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
            <a class="navbar-brand" href="#"> <img class="image-icon mb-1" src={icon} alt=""/></a>
               <a class="navbar-brand nav-text"  href="#">YOGGER</a>
               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

                     <li class="nav-item">
                           <Link class="nav-link me-5 active" to="/">Home</Link>
                     </li>
                     <li class="nav-item">
                           <Link class="nav-link me-5" to="/about">About</Link>
                     </li>
                     <li class="nav-item">
                           <Link class="nav-link me-5" to="/contact">Contacts Us</Link>
                     </li>

                     {loggedInUser.isAdmin && loggedInUser.isLoggedIn && <div> 
                        <li class="nav-item">
                           <Link class="nav-link me-5" to="/orderList">Admin</Link>
                        </li>
                     </div>}
                     <Link to="/login"><button class="btn btn-brand">Login</button></Link>
                  </ul>
               </div>
            </div>
         </nav> 
      </section>
   );
};

export default Navbar;