import React, { useEffect, useState } from 'react';
import TestimonialsInfo from '../TestimonialsInfo/TestimonialsInfo';
import './Testimonials.css'

const Testimonials = () => {

   const [testimonialsData, setTestimonialsData] = useState([])

   useEffect(() => {
      fetch('https://boiling-falls-89855.herokuapp.com/clientReview')
      .then(res => res.json())
      .then(data => setTestimonialsData(data))
   },[])

   return (
      <section class="bg-color">
         <div class="container">
            <p class="text-center pt-5">What people say</p>
            <h1 class="text-center">Loved by our <br/>Customers</h1>
            <div class="row">
               <div class="d-flex justify-content-center mt-5 mb-4 pb-4 pt-4">
                  {
                     testimonialsData.map(testimonials => <TestimonialsInfo testimonials={testimonials}></TestimonialsInfo>)
                  }
               </div>
            </div>
         </div>
      </section>
   );
};

export default Testimonials;