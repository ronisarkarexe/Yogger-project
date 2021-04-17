import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';


const AdminLayout = (props) => {


   return (
      <main class="container-fluid">
         <div className="row">
            <div className="col-md-3">
               <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 bg-color">
              {props.children}
            </div>
         </div>
      </main>
   );
};

export default AdminLayout;