import React from 'react';
import yoga from '../../../Images/unnamed.png'
import './HomeDetails.css'

const HomeDetails = () => {
   return (
      <section class="container">
         <div class="row">
            <div class="col-md-6">
               <img class="img-fluid" src={yoga} alt=""/>
            </div>
            <div class="col-md-6 mt-5 pt-4">
               <h1 class="title-item">EveryDay <br/> is a great <br/> day for <br/> yoga</h1> <br/>
               <button type="button" class="btn btn-outline-secondary">JOIN CLASSES</button>
            </div>
         </div>
      </section>
   );
};

export default HomeDetails;