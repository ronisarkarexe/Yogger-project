import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faPlus, faUserPlus, faServer, faHome} from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'
import { Link } from 'react-router-dom';
import logo from '../../../Icon/lotus.png'


const Sidebar = () => {
   return (
      <section>
         <div>
            <div class="sidebar-contain ms-5">
               <img class="img-fluid image-size" src={logo} alt=""/> <br/>
               <Link to="/orderList" ><button class="mt-4 button-size"> <FontAwesomeIcon icon={faAddressBook}/> Order List</button></Link> <br/>
               <Link to="/addService" ><button class="mt-4 button-size"> <FontAwesomeIcon icon={faPlus}/> Add Service</button></Link> <br/>
               <Link to="/makeAdmin" ><button class="mt-4 button-size"> <FontAwesomeIcon icon={faUserPlus}/> Make Admin</button></Link> <br/>
               <Link to="/manageServices" ><button class="mt-4 button-size"> <FontAwesomeIcon icon={faServer}/>  Manage Services</button></Link> <br/>
               <Link to="/"><button class="button-size mt-4"> <FontAwesomeIcon icon={faHome}/> Home Page</button></Link>
        </div>
      </div>
      </section>
   );
};

export default Sidebar;