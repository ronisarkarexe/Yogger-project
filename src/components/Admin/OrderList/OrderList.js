import React, { useContext, useEffect, useState } from 'react';
import {UserContext} from '../../../App'
import AdminLayout from '../../Layout/AdminLayout';

const OrderList = () => {

   const [loggedInUser, setLoggedInUser] = useContext(UserContext)

   const [orderList, setOrderList] = useState([])

   useEffect(() => {
      fetch('https://boiling-falls-89855.herokuapp.com/services')
      .then(res => res.json())
      .then(data => setOrderList(data))
   },[])



   return (
      <AdminLayout>
         <section>
        <div class="container row">
         <div class="">
            <div>
               <table className="table">
                  <thead>
                        <th>Name</th>
                        <th>Email Id</th>
                        <th>Service</th>
                        <th>Pay With</th>
                  </thead>
                  <tbody>
                     {
                        orderList.map(order =>  <tr>
                           <td>{loggedInUser.name}</td>
                           <td>{loggedInUser.email}</td>
                           <td>{order.name}</td>
                           <td>Credit Card</td>
                        </tr>)
                     }
                  </tbody>
               </table>
            </div>
         </div>
      </div>
      </section>
      </AdminLayout>
   );
};

export default OrderList;