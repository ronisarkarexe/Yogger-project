import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import BookSidbar from '../BookSidbar/BookSidbar';
import BookingList from '../BookingList/BookingList';
import BookPayment from '../BookPayment/BookPayment';
import Review from '../Review/Review';
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

   return (
      <section>
         <div class="row">
            <div class="d-flex justify-content-center">
               <div className="col-md-3">
                  <BookSidbar></BookSidbar>
               </div>
               <div className="col-md-9 bg-color">
                  {/* <BookingList></BookingList> */}
                  {/* <BookPayment></BookPayment> */}
                  <Review></Review>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Book;