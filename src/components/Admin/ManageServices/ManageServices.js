import React, { useEffect, useState } from 'react';
import './ManageServices.css';
import AdminLayout from '../../Layout/AdminLayout';
const ManageServices = () => {

   const [manageServices, setManageServices] = useState([])


   useEffect(() => {
      fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => setManageServices(data))
   },[])
  
   console.log('Service', manageServices)


   const handelDelete = (id) => {
      console.log(id)
      fetch(`http://localhost:5000/delete/${id}`,{
         method: 'DELETE',
      })
      .then(res => res.json())
      .then(result => {
         alert('delete successfully')
      })
   }

   return (
      <AdminLayout>
         <section class="container">
            <div class="row">
               <div>
                  {
                     manageServices.map(manage => (
                     <div class="col-md-4">
                        <div class="booking-center mt-4 ps-2">
                           <div class="image-size-card">
                              <img class="img-fluid" src={manage.image} alt=""/>
                           </div>
                           <div class="mt-4">
                              <h4>{manage.name}</h4>
                              <p>{manage.description}</p>
                           </div>
                           <div class="d-flex">
                              <h4 >${manage.price}</h4>
                              <button onClick={ () =>handelDelete(manage._id)} class="btn-brand ms-5">Delete</button>
                           </div>
                        </div>
                     </div>
                     ))
                  }     
               </div>
            </div>
         </section>
      </AdminLayout>
   );
};

export default ManageServices;