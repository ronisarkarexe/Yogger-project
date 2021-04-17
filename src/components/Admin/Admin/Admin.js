import React, { useState } from 'react';
import './Admin.css';
import Sidebar from '../Sidebar/Sidebar';
import OrderList from '../../Admin/OrderList/OrderList';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageServices from '../ManageServices/ManageServices';



const Admin = () => {

   const [sidebar, setSidebar] = useState({
      orderList: true,
      addServer: false,
      makeAdmin: false,
      manageServices: false,
   })


   return (
      <main class="container-fluid">
         <div className="row">
            <div className="col-md-3">
               <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 bg-color">
               { sidebar && <OrderList ></OrderList>}
               { !sidebar && <AddService></AddService>}
               { !sidebar && <MakeAdmin></MakeAdmin>}
               { !sidebar && <ManageServices></ManageServices>}
            </div>
         </div>
      </main>
   );
};

export default Admin;