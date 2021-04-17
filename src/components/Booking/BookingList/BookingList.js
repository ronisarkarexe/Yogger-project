import React, { useEffect, useState } from 'react';
import BookDetails from '../BookDetails/BookDetails';
import './BookingList.css';

const BookingList = () => {
   const [book, setBook] = useState([])

   useEffect(() => {
      fetch('http://localhost:5000/cartDetails')
      .then(res => res.json())
      .then(data => setBook(data))
   },[])


   return (
      <section class="container">
         <div class="row">
            <div class="display-flex">
               {
                  book.map(books => <BookDetails books={books}></BookDetails>)
               }
            </div>
         </div>
      </section>
   );
};

export default BookingList;