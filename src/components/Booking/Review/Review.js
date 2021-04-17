import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';

const Review = () => {

   const { register, handleSubmit, watch, formState: { errors } } = useForm();

   const [loggedInUser, setLoggedInUser] = useContext(UserContext);

   const onSubmit = data => {
      console.log(data)

      const reviewData = {
         name: data.name,
         title: data.title,
         opinion: data.opinion,
      }
       const url = 'http://localhost:5000/addReview'

       fetch(url, {
          method: 'POST',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify(reviewData)
       })
       .then(res => console.log('server side response', res))
   };


   return (
      <div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <input name="opinion" defaultValue="" placeholder="Enter opinion" {...register("opinion")} /> <br/>
            <input name="name" defaultValue="" placeholder="Enter your name" {...register("name")} /> <br/>
            <input name="title" defaultValue="" placeholder="Enter trainer title" {...register("title")} /> <br/>
            <input type="submit" />
         </form>
      </div>
   );
};

export default Review;