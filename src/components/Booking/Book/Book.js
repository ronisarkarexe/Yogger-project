import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import BookingList from '../BookingList/BookingList';
import BookPayment from '../BookPayment/BookPayment';
import Review from '../Review/Review';
import BookSidbar from '../BookSidbar/BookSidbar'
const Book = () => {

   const {id} = useParams()
   console.log('id',id)


   const url = 'http://localhost:5000/addToServices';
   useEffect(() => {
      fetch(url,{
         method: 'POST',
         headers: {'content-type': 'Application/json'},
         body: JSON.stringify({id})
      })
      .then(res => console.log('server side response', res));
   },[id])

   const [booked, setBooked] = useState({
      bookList: true,
      bookPayment: false,
      review: false
   })

   return (
      <section>
         <div class="row">
            <div class="d-flex justify-content-center">
               <div className="col-md-3">
                  <BookSidbar></BookSidbar>
               </div>
               <div className="col-md-9 bg-color">
                  {  !booked && <BookingList></BookingList> }
                  {  !booked && <BookPayment></BookPayment> }
                  {  booked && <Review></Review>}
               </div>
            </div>
         </div>
      </section>
   );
};

export default Book;