import React from 'react';
import './BasicYoga.css';
import basic from '../../../Images/Basic yoga.PNG'

const BasicYoga = () => {
   return (
      <div class="container">
         <div class="row mt-5 mb-5 pt-5 pb-5">
            <h1 class="text-center mb-5">YOGA LIST</h1>
            <div class="d-flex justify-content-center">
               <div class="col-md-8">
                  <img class="img-fluid rounded" src={basic} alt=""/>
               </div>
               <div class="col-md-4 mt-3 ms-5">
                  <div class="mb-4">
                     <h1>Basic Yoga</h1>
                     <p class="mt-4 text-secondary">Lorem ipsum dolor sit amet consectetur <br/> adipiscing elit nulla mauris dolor gravida</p>
                  </div>
                  <hr/>
                  <div class="mt-4 mb-4">
                     <h1>Normal Yoga</h1>
                     <p class="mt-4 text-secondary">Lorem ipsum dolor sit amet consectetur <br/> adipiscing elit nulla mauris dolor gravida</p>
                  </div>
                  <hr/>
                  <div class="mt-4">
                     <h1>Gentle Yoga</h1>
                     <p class="mt-4 text-secondary">Lorem ipsum dolor sit amet consectetur <br/> adipiscing elit nulla mauris dolor gravida</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BasicYoga;