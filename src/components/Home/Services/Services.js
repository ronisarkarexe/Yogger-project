import React, { useEffect, useState } from 'react';
import ServicesDetail from '../ServicesDetail/ServicesDetail';
import './Services.css';


const Services = () => {

   const [services, setServices] = useState([])


   useEffect(() => {
      fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => setServices(data))
   },[])

   console.log('Services',services)

   return (
      <section class="container">
         <h2 class="text-center mt-4">Offering courses</h2>
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