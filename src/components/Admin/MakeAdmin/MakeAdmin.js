import React from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {

   const { register, handleSubmit, watch, formState: { errors } } = useForm();
   const onSubmit = data => console.log(data);

   return (
      <section class="container mt-5">
         <h3>Make Admin</h3>
            <div class="">
               <form onSubmit={handleSubmit(onSubmit)}>
                  <label>Email</label> <br/>
                  <input type="email" name="email" defaultValue="" placeholder="" {...register("email")} /> <br/> <br/>
                  <input type="submit" />
               </form>
            </div>
      </section>
   );
};

export default MakeAdmin;