import React, { useContext, useEffect, useState } from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleFrom from '../SimpleFrom/SimpleFrom';
import './BookPayment.css';
import {UserContext} from '../../../App'
import { useLocation, useParams } from 'react-router-dom';
const stripePromise = loadStripe('pk_test_51Ie1dzE9NKB64CMlxhjAh6w9YsrBlaL5yURP3KpivLyChPIVpOpmaJCsMOGNZtYensxjZqBIhQ8B7a4h3Eicf9Ak00VEMEKvGh');

const BookPayment = () => {

   const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  

   const location = useLocation();
   const courseInfo = location.state;
   const {price, name} = courseInfo;
   console.log('Setting',price,name)

   return (
      <section>
            <div class="">
               <div class>
                  <h4>Name: {loggedInUser.name}</h4>
                  <h4>Email: {loggedInUser.email}</h4>
                  <h5>Course Name: {name}</h5>
                  <h4>price: ${price}</h4>
               </div>
               <div class="simple-cart mt-5">
                  <h5 class="mb-4">Pay With</h5>
                  <Elements stripe={stripePromise}>
                     <SimpleFrom></SimpleFrom>
                  </Elements>
               </div>
            </div>
      </section>
   );
};

export default BookPayment;