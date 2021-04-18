import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useEffect } from 'react/cjs/react.development';
import AdminLayout from '../../Layout/AdminLayout';
import './MakeAdmin.css'
const MakeAdmin = () => {

   const { register, handleSubmit, formState: { errors } } = useForm();
   
   const [admin, setAdmin] = useState([])

   const onSubmit = data => {

      console.log(data)

      const adminEmail = {
         email: data.email,
      }

      const url = 'http://localhost:5000/addAdminEmail';

      fetch(url, {
         method: 'POST',
         headers: {'content-type': 'application/json'},
         body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => {
         alert('admin added successfully')
      })
   };


   useEffect(() => {
      fetch('http://localhost:5000/addAdminMail')
      .then(res => res.json())
      .then(data => setAdmin(data))
   },[])

   console.log('get admin',admin)

   return (
      <AdminLayout>
         <section class="container mt-4">
         <h3>Make Admin</h3>
            <div class="">
               <form onSubmit={handleSubmit(onSubmit)}>
                  <label class="mt-4">Email</label> <br/>
                 <input class="input-group" name="email" defaultValue="" placeholder=" Enter Email" {...register("email")} /> <br/>
                  <input class="btn-brand" type="submit" />
               </form>
            </div>
      </section>
      </AdminLayout>
   );
};

export default MakeAdmin;