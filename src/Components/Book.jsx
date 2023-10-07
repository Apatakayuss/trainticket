// import React, { useState } from 'react'
// import '../Components/styles/Book.css'
// import {GiWaterRecycling} from 'react-icons/gi'

// const Book = () => {
//     const departure = [departure, setDepature] = useState('');
//     // const arrival = [destination, setDestination] = useState('')
//     // const date = [date, setDate] = useState('')
//     // const passenger = [passenger, setPassenger] = useState(1)
//   return (
//     <div>
//         <form action="">
//             <h2>Travel route</h2>

//             <div className='input-div'>
//                 <div>
//                     <label htmlFor="departure">Departure</label>
//                         <input type="text" 
//                         id='departure'
//                         className='departure'
//                         value={departure}
//                         onChange={(e) => setDepature(e.target.value)}
//                     />
//                 </div>

//                     <button className='icon-btn'>
//                         <GiWaterRecycling />
//                     </button>

//                 <div>
//                     <label htmlFor="arrival">Destination</label>
//                         <input type="text" 
//                         id='destination'
//                         className='arrival'
//                         // value={arrival}
//                         // onChange={(e) => setArrival(e.target.value)}
//                     />
//                 </div>
//             </div>


//             <div className='input-div'>
//                 <div>
//                     <label htmlFor="departure">Departure date</label>
//                         <input type="date" 
//                         id='date'
//                         // value={date}
//                         // onChange={(e) => setDate(e.target.value)}
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor="arrival">Arrival date</label>
//                         <input type="date" 
//                         id='date'
//                         // value={date}
//                         // onChange={(e) => setDate(e.target.value)}
//                     />
//                 </div>
//             </div>

//             <div className='input-div' style={{width: 'fit-content'}}>
//                 <div>
//                     <label htmlFor="departure">Passenger</label>
//                         <input type="number" 
//                         id='passenger'
//                         // value={passenger}
//                         // onChange={(e) => setDate(e.target.value)}
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor="departure">Passenger</label>
//                         <input type="number" 
//                         id='passenger'
//                         // value={passenger}
//                         // onChange={(e) => setDate(e.target.value)}
//                     />
//                 </div>

                
//             </div>

//             <button>Search for Train</button>
//         </form>
//     </div>
//   )
// }

// export default Book

import React, { useState, startTransition } from 'react';
import '../Components/styles/Book.css';
import { Link } from 'react-router-dom';
// import { GiWaterRecycling } from 'react-icons/gi';

const Book = () => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [passengerCount, setPassengerCount] = useState(1);

  const handleSearch = () => {
    startTransition(() => {
      console.log(`Searching for trains from ${departure} to ${destination}`);
      console.log(`Departure Date: ${departureDate}, Arrival Date: ${arrivalDate}`);
      console.log(`Number of Passengers: ${passengerCount}`);
    });
  };
  





  return (
    <div>
      <form action="">
        <h2>Travel route</h2>

        <div className='input-div'>
          <div>
            <label htmlFor="departure">Departure</label>
            <input
              type=""
              id='departure'
              className='departure'
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
            />
          </div>

          {/* <button className='icon-btn'>
            <GiWaterRecycling />
          </button> */}

          <div>
            <label htmlFor="destination">Destination</label>
            <input
              type="text"
              id='destination'
              className='arrival'
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
        </div>

        <div className='input-div'>
          <div>
            <label htmlFor="departureDate">Departure date</label>
            <input
              type="date"
              id='departureDate'
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="arrivalDate">Arrival date</label>
            <input
              type="date"
              id='arrivalDate'
              value={arrivalDate}
              onChange={(e) => setArrivalDate(e.target.value)}
            />
          </div>
        </div>

        <div className='input-div' style={{ width: 'fit-content' }}>
          <div>
            <label htmlFor="passengerCount">Passenger</label>
            <input
              type="number"
              id='passengerCount'
              value={passengerCount}
              onChange={(e) => setPassengerCount(parseInt(e.target.value))}
              min="1"
            />
          </div>

          <div>
            <label htmlFor="passengerCount">Passenger</label>
            <input
              type="number"
              id='passengerCount'
              value={passengerCount}
              onChange={(e) => setPassengerCount(parseInt(e.target.value))}
              min="1"
            />
          </div>
        </div>

        <div className="btn-wrapper">
        <Link to="/Confirmation">
          <button type="submit" onClick={handleSearch}>
            Search for Train
          </button>
        </Link>
        </div>
      </form>
    </div>
  );
};

export default Book;
