import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';
const axios = require('axios').default;

const AddService = () => {

   const { register, handleSubmit, formState: { errors } } = useForm();

   const [imageURL, setImageURL] = useState(null)

   const onSubmit = data => {
      console.log(data)

      const eventData = {
         name: data.name,
         price: data.price,
         description: data.description,
         image:imageURL,
      };

      const url =`http://localhost:5000/addServer`;

      fetch(url, {
         method: 'POST',
         headers: {'content-type': 'application/json'},
         body: JSON.stringify(eventData)
      })
      .then(res => res.json())
      .then(data => {
         if(data){
            alert('Your order placed successfully')
         }
      })
   };

   const handelImageUploaded = event => {
      const imageData = new FormData();
      imageData.set('key', 'b6020e5849745d14f654a0f4aa7d0217')
      imageData.append('image', event.target.files[0])

      axios.post('https://api.imgbb.com/1/upload',imageData )
       .then(function (response) {
         setImageURL(response.data.data.display_url)
       })
       .catch(function (error) {
         console.log(error);
       });
   }

   return (
      <section class="container-fluid">
        <div class="row">
            <div class="">
               <form onSubmit={handleSubmit(onSubmit)}>
                  <input name="name" defaultValue="" placeholder="Enter name" {...register("name")} /> <br/>
                  <input name="price" defaultValue="" placeholder="Enter price" {...register("price")} /> <br/>
                  <input name="description" defaultValue="" placeholder="Enter description" {...register("description")} /> <br/>
                  <input type="file" name="image" onChange={handelImageUploaded} /> <br/>
                  <input type="submit" />
               </form>
            </div>
         </div>
      </section>
   );
};

export default AddService;