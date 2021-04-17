import React, { useContext } from 'react';
import {UserContext} from '../../../App'

const OrderList = () => {

   const [loggedInUser, setLoggedInUser] = useContext(UserContext)

   return (
      <section>
        <div className="container">
         <h4>CheckOut</h4>
         <div className="check-out">
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
                     <tr>
                        <td>{loggedInUser.name}</td>
                        <td>{loggedInUser.email}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
      </section>
   );
};

export default OrderList;