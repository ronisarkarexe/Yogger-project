import React from 'react';
import { useLocation } from 'react-router';
import BookPayment from '../BookPayment/BookPayment';
import './BookingList.css';

const BookingList = () => {

   const location = useLocation();
   const courseInfo = location.state;
   const {price, name, image,description} = courseInfo;

   return (
      <section class="d-flex">
         <div class="row">
            <div class="col-md-5">
               <div class="booking-center mt-4 ps-2">
                  <div class="image-size-card">
                     <img class="img-fluid" src={image} alt=""/>
                  </div>
                  <div class="mt-4">
                     <h4>{name}</h4>
                     <p>{description}</p>
                  </div>
                  <div class="d-flex">
                     <h4 class=" color-price">${price}</h4>
                  </div>
               </div>
            </div>
         </div>
         <div class="col-md-5 ms-4">
           <BookPayment ></BookPayment>
         </div>
      </section>
   );
};

export default BookingList;