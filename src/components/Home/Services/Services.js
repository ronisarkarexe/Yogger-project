import React, { useEffect, useState } from 'react';
import ServicesDetail from '../ServicesDetail/ServicesDetail';
import './Services.css';


const Services = () => {

   const [services, setServices] = useState([])


   useEffect(() => {
      fetch('https://boiling-falls-89855.herokuapp.com/services')
      .then(res => res.json())
      .then(data => setServices(data))
   },[])

   console.log('Services',services)

   return (
      <section class="container">
         <h2 class="text-center mt-4">Offering services</h2>
         <div class="row">
            <div class="d-flex justify-content-center">
               {
                  services.map((service => <ServicesDetail service={service}></ServicesDetail>))
               }
            </div>
         </div>
      </section>
   );
};

export default Services;