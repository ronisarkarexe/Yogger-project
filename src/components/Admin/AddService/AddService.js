import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import AdminLayout from '../../Layout/AdminLayout';
import './AddService.css';
import {UserContext} from '../../../App'
const axios = require('axios').default;

const AddService = () => {

   const { register, handleSubmit, formState: { errors } } = useForm();


   const [imageURL, setImageURL] = useState(null)

   const onSubmit = data => {
      console.log(data)

      const eventData = {
         name: data.name,
         price: data.price,
         id: data.id,
         description: data.description,
         image:imageURL,
      };

      const url =`https://boiling-falls-89855.herokuapp.com/addServer`;

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
      <AdminLayout>
         <section class="container-fluid mt-4">
        <div class="row">
            <div class="add-services">
               <h3>Add Services</h3>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <input class="input-group" name="name" defaultValue="" placeholder=" Enter name" {...register("name")} /> <br/>

                  <input class="input-group" name="price" defaultValue="" placeholder=" Enter price" {...register("price")} /> <br/>

                  <input class="input-group" name="id" defaultValue="" placeholder=" Enter id" {...register("id")} /> <br/>

                  <textarea class="input-group" name="description" defaultValue="" placeholder=" Enter description" {...register("description")} /> <br/>

                  <input type="file" name="image" onChange={handelImageUploaded} /> <br/>
                  <input class="btn-brand mt-4" type="submit" />
               </form>
            </div>
         </div>
      </section>
      </AdminLayout>
   );
};

export default AddService;