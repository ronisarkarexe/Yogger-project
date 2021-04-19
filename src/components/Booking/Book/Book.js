import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookingList from '../BookingList/BookingList';
import Review from '../Review/Review';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faList, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../Icon/lotus.png';
import './Book.css'

const Book = () => {

   const {id} = useParams()
   console.log('id',id)

   const [bookList, setBookList] = useState(true)

   const url = 'https://boiling-falls-89855.herokuapp.com/addToServices';
   useEffect(() => {
      fetch(url,{
         method: 'POST',
         headers: {'content-type': 'Application/json'},
         body: JSON.stringify({id})
      })
      .then(res => console.log('server side response', res));
   },[id])

   return (
      <section>
         <div class="row">
            <div class="d-flex justify-content-center">
               <div className="col-md-3 sidebar-contain">
                <img class="img-fluid image-size" src={logo} alt=""/> <br/>
                  <button onClick={() => setBookList(true)} class="mt-4 button-size">  <FontAwesomeIcon icon={faList}/>  BookList and Payment</button> <br/>

                  <button onClick={() => setBookList(false)} class="mt-4 button-size"> <FontAwesomeIcon icon={faCommentAlt}/>  Review</button> <br/>

                  <Link to="/"><button class="button-size mt-4"> <FontAwesomeIcon icon={faHome}/> Home Page</button></Link>

               </div>
               <div className="col-md-9 bg-color">
                  {
                     bookList? 
                     <BookingList></BookingList> :
                     <Review></Review>
                  }
               </div>
            </div>
         </div>
      </section>
   );
};

export default Book;