import React from 'react';
import './BookSidbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faShoppingCart, faList, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../../../Icon/lotus.png';

const BookSidbar = () => {
   return (
      <div>
         <div class="sidebar-contain ms-5">
            <img class="img-fluid image-size" src={logo} alt=""/> <br/>
            <Link ><button class="mt-4 button-size"> <FontAwesomeIcon icon={faShoppingCart}/> Book Payment</button></Link> <br/>
            <Link ><button class="mt-4 button-size">  <FontAwesomeIcon icon={faList}/>  Booking List</button></Link> <br/>
            <Link ><button class="mt-4 button-size"> <FontAwesomeIcon icon={faCommentAlt}/>  Review</button></Link> <br/>
            <Link to="/"><button class="button-size mt-4"> <FontAwesomeIcon icon={faHome}/> Home Page</button></Link>
         </div>
      </div>
   );
};

export default BookSidbar;