// import React, { useState } from 'react';
// import { useEffect } from 'react';
// import { useParams } from 'react-router';
// import Book from '../Booking/Book/Book';
// import BookSidbar from '../Booking/BookSidbar/BookSidbar';


// const AddBookLayout = (props) => {

//    const {id} = useParams()
//    console.log('id',id)


//    const url = 'http://localhost:5000/addToServices';
//    useEffect(() => {
//       fetch(url,{
//          method: 'POST',
//          headers: {'content-type': 'Application/json'},
//          body: JSON.stringify({id})
//       })
//       .then(res => console.log('server side response', res));
//    },[id])


//    return (
//       <section>
//          <div class="row">
//             <div class="d-flex justify-content-center">
//                <div className="col-md-3">
//                   <BookSidbar></BookSidbar>
//                </div>
//                <div className="col-md-9 bg-color">
//                {props.children}
//                   {/* {booked && <BookingList></BookingList> }
//                   {!booked && <BookPayment></BookPayment> }
//                   {!booked && <Review></Review>} */}
//                </div>
//             </div>
//          </div>
//       </section>
//    );
// };

// export default AddBookLayout;