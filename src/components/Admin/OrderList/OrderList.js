import React, { useContext, useEffect, useState } from 'react';
import {UserContext} from '../../../App'
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {

   const [loggedInUser, setLoggedInUser] = useContext(UserContext)

   const [orderList, setOrderList] = useState([])

   useEffect(() => {
      fetch('http://localhost:5000/cartDetails')
      .then(res => res.json())
      .then(data => setOrderList(data))
   },[])


   return (
      <section>
        <div class="container row">
            {/* <Sidebar></Sidebar> */}
         <div class="check-out col-md-9">
            <div>
               <table className="table">
                  <thead>
                        <th>Name</th>
                        <th>Email Id</th>
                        <th>Service</th>
                        <th>Pay With</th>
                        <th>Status</th>
                  </thead>
                  <tbody>
                     {
                        orderList.map(order =>  <tr>
                           <td>{loggedInUser.name}</td>
                           <td>{loggedInUser.email}</td>
                           <td>{order.name}</td>
                           <td>Credit Card</td>
                           <td></td>
                        </tr>)
                     }
                  </tbody>
               </table>
            </div>
         </div>
      </div>
      </section>
   );
};

export default OrderList;