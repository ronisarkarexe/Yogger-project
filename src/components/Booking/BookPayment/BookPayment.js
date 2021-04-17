import React, { useContext } from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleFrom from '../SimpleFrom/SimpleFrom';
import './BookPayment.css';
import {UserContext} from '../../../App'
const stripePromise = loadStripe('pk_test_51Ie1dzE9NKB64CMlxhjAh6w9YsrBlaL5yURP3KpivLyChPIVpOpmaJCsMOGNZtYensxjZqBIhQ8B7a4h3Eicf9Ak00VEMEKvGh');

const BookPayment = () => {

   const [loggedInUser, setLoggedInUser] = useContext(UserContext)

   return (
      <section>
            <div class="">
               <div class>
                  <h4>Name: {loggedInUser.name}</h4>
                  <h4>Email: {loggedInUser.email}</h4>
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