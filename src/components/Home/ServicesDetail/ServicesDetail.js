import React from 'react';
import { useHistory } from 'react-router';
import './ServicesDetail.css'
const ServicesDetail = (props) => {
   const {_id,image, name, description, price} = props.service;

   const history = useHistory();


   const bookingYogaService = (serviceId) => {
      const url = `/book/${serviceId}`;
      history.push(url);
      console.log('hello', url)
   }


   return (
      <section class="col-md-4 mt-5 mb-5 pb-5">
         <div class="card card-body-title">
             <a onClick={ () => bookingYogaService(_id)}><img src={image} class="card-img-top" alt="..."/></a>
            <a onClick={ () => bookingYogaService(_id)}><div class="card-body">
               <h5 class="card-title">{name}</h5>
               <p class="card-text">{description}</p>
               <h5>${price}</h5>
            </div></a>
         </div>
      </section>
   );
};

export default ServicesDetail;