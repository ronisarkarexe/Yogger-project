import React from 'react';
import './Trainer.css';
import trainer from '../../../Images/Capture.PNG'

const Trainer = () => {
   return (
      <section class="container">
         <div class="row mt-5 mb-5 pt-2 pb-2">
            <div class="col-md-6 pt-4 mt-5 trainer">
               <h4>Welcome to yogger studio</h4>
               <hr class="h4-hr"/>
               <h1 class="mt-4 mb-4">Yoga life for<br/>greater sellf<br/>control</h1>
               <p class="text-secondary">We’re all about inspiring people to be <br/> happier and healthier in daily life</p>
               <h4>DISCOVER ABOUT</h4>
               <hr class="cls-hr"/>
            </div>
            <div class="col-md-6 mb-5 mt-5">
               <img class="img-fluid" src={trainer} alt=""/>
            </div>
         </div>
      </section>
   );
};

export default Trainer;