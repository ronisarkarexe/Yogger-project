import React from 'react';
import Navbar from '../../Shareds/Navbar/Navbar';
import HomeDetails from '../HomeDetails/HomeDetails';
import './Header.css'
const Header = () => {
   return (
      <section class="back-color">
         <Navbar></Navbar>
         <HomeDetails></HomeDetails>
      </section>
   );
};

export default Header;