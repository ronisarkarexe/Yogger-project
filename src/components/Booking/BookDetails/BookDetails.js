import React from 'react';
import './BookDetails.css'
const BookDetails = ({books}) => {

   const handelBook = (id) => {
      console.log('id', id)
   }



   return (
      <section class="">
            <div class="col-md-6">
               <div class="booking-center mt-4 ps-2">
                  <div class="image-size-card">
                     <img class="img-fluid" src={books.image} alt=""/>
                  </div>
                  <div class="mt-4">
                     <h4>{books.name}</h4>
                     <p>{books.description}</p>
                  </div>
                  <button onClick={() =>handelBook(books._id)} class="btn-brand text-center">Order Services</button>
               </div>
            </div>
      </section>
   );
};

export default BookDetails;