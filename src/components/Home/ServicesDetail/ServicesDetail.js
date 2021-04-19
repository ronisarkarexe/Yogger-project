import React from 'react';
import { useHistory } from 'react-router-dom';
import './ServicesDetail.css'
const ServicesDetail = (props) => {
   const {_id,image, name, description, price} = props.service;

   const history = useHistory();

   const bookingYogaService = (serviceId) => {
      const url = `/book/${serviceId}`;
      history.push({
         pathname: '/book/url',
         state: {image, name, description, price}
      });
      console.log('serverUrl', url)
   }


   return (
      <section class="col-md-4 col-sm-6 mt-5 mb-5 pb-5">
         <div class="card card-body-title">
             <img src={image} class="card-img-top" alt="..."/>
            <a><div class="card-body">
               <h5 class="card-title">{name}</h5>
               <p class="card-text">{description}</p>
               <div class="d-flex">
                  <h5>${price}</h5>
                  <button onClick={ () => bookingYogaService(_id)} class="btn-brand ms-5">BOOK NOW</button>
               </div>
            </div></a>
         </div>
      </section>
   );
};

export default ServicesDetail;