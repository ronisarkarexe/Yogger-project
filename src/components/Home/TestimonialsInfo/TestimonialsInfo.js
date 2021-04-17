import React from 'react';
import './TestimonialsInfo.css';
import image from '../../../Images/irene-strong.png'

const TestimonialsInfo = (props) => {
   const {name, opinion,title} = props.testimonials;
   return (
      <section class="col-md-4">
         <div>
            <div>
               <p class="text-secondary card-info">{opinion}</p>
            </div>
            <div class="d-flex ms-3 mt-4">
               <img class="img-fluid image-circle"src={image} alt=""/>
               <div class="ms-4 info-indent">
                  <h5 class="text-uppercase">{name}</h5>
                  <h6 class="text-uppercase text-secondary">{title}</h6>
               </div>
            </div>
            <div class="row">
               <div class="d-flex mt-3">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
               </div>
            </div>
         </div>
      </section>
   );
};

export default TestimonialsInfo;
