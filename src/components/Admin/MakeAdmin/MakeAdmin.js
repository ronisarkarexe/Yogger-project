import React from 'react';
import { useForm } from "react-hook-form";
import AdminLayout from '../../Layout/AdminLayout';
import './MakeAdmin.css'
const MakeAdmin = () => {

   const { register, handleSubmit, formState: { errors } } = useForm();
   const onSubmit = data => console.log(data);

   return (
      <AdminLayout>
         <section class="container mt-4">
         <h3>Make Admin</h3>
            <div class="">
               <form onSubmit={handleSubmit(onSubmit)}>
                  <label class="mt-4">Email</label> <br/>
                  <input class="make-admin" type="email" name="email" defaultValue="" placeholder="programminghero001@gamil.com" {...register("email")} /> <br/> <br/>
                  <input class="btn-brand" type="submit" />
               </form>
            </div>
      </section>
      </AdminLayout>
   );
};

export default MakeAdmin;