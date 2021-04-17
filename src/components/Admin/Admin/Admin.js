import React from 'react';
import './Admin.css';
import Sidebar from '../Sidebar/Sidebar';
import OrderList from '../../Admin/OrderList/OrderList';
import AddService from '../AddService/AddService';



const Admin = () => {


   return (
      <main class="container-fluid">
         <div className="row">
            <div className="col-md-3">
               <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 bg-color">
               {/* <OrderList ></OrderList> */}
               <AddService></AddService>
            </div>
         </div>
      </main>
   );
};

export default Admin;