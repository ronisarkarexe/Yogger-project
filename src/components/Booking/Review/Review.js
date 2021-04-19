import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
const Review = () => {

   const { register, handleSubmit, formState: { errors } } = useForm();

   const [loggedInUser, setLoggedInUser] = useContext(UserContext);

   const onSubmit = data => {
      console.log(data)

      const reviewData = {
         name: data.name,
         email: data.email,
         title: data.title,
         opinion: data.opinion,
      }
       const url = 'https://boiling-falls-89855.herokuapp.com/addReview'

       fetch(url, {
          method: 'POST',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify(reviewData)
       })
       .then(res => console.log('server side response', res))
   };


   return (
      <div class="mt-4">
         <form onSubmit={handleSubmit(onSubmit)}>
            <textarea class="input-group" name="opinion" defaultValue="" placeholder="Enter opinion" {...register("opinion")} /> <br/>

            <input class="input-group" name="email" defaultValue={loggedInUser.email} placeholder=" Enter Email" {...register("email")} /> <br/>

            <input class="input-group" name="name" defaultValue="" placeholder="Enter your name" {...register("name")} /> <br/>

            <input class="input-group" name="title" defaultValue="" placeholder="Enter trainer title" {...register("title")} /> <br/>

            <input class="btn-brand" type="submit" />
         </form>
      </div>
   );
};

export default Review;