import React from 'react';
import './BookDetails.css'
const BookDetails = ({books}) => {
   return (
      <section class="">
            <div class="col-md-4">
               <div class="booking-center">
                  <div class="d-flex image-size-card">
                     <img class="img-fluid" src={books.image} alt=""/>
                     <div>
                        <button>Done</button>
                     </div>
                  </div>
                  <div>
                     <h4>{books.name}</h4>
                     <p>{books.description}</p>
                  </div>
               </div>
            </div>
      </section>
   );
};

export default BookDetails;