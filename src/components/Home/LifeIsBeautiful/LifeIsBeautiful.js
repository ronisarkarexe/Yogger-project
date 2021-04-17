import React from 'react';
import './LifeIsBeautiful.css';
import lotus from '../../../Images/lotus-flower.png'
const LifeIsBeautiful = () => {
   return (
      <div class="container mb-5 pb-5">
         <h1 class="text-center mb-5 pb-2 text-secondary">Life Is Beautiful</h1>
         <div className="row">
            <div class="d-flex justify-content-center">
               <div className="col-md-4">
                  <img class="img-fluid lotus-img"src={lotus} alt=""/>
               </div>
               <div className="col-md-4 mt-5 pt-2">
                  <h2 class="ms-3">You can always <br/> control what <br/> goes on inside</h2>
               </div>
               <div className="col-md-4 mt-5 pt-2">
                  <p class="text-secondary">Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla mauris dolor gravida a varius scelerisque auctor eget purus phasellus scelerisque sapien</p>
                  <h5 class="ms-1">DISCOVER COURSES</h5>
                  <hr class="cls-hr"/>
               </div>
            </div>
         </div>
      </div>
   );
};

export default LifeIsBeautiful;