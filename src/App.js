import { Routes, Route } from "react-router-dom";
import { useState, useReducer } from 'react';

import Header from  './components/Header.js';
import Main from  './components/Main.js';
import BookingPage from './components/booking/BookingPage.js';
import ConfirmedBooking from './components/booking/ConfirmedBooking.js';
import Footer from  './components/Footer.js';
import './App.css';

const updateTimes = (state, action) => {
      console.log('updateTimes called');
      // console.log(`action: ${action}`);
      // console.log(`type of action: ${typeof action}`);
      const availableSlots = window.fetchAPI(action);
      console.log(`available slots: ${availableSlots}`);
      return availableSlots;
  }

const initializeTimes = () => {
  const dateToday = new Date().toLocaleDateString('en-GB');
  // console.log(typeof window.fetchAPI);
  window.fetchAPI = function(date) {
    let result = [];

    for (let i = 17; i <= 23; i++) {
      let random = Math.random();
      if (random < 0.5) result.push(i + ':00');
      if (random < 0.5) result.push(i + ':30');
    }
    return result;
  };
  const availableSlots = window.fetchAPI(dateToday);
  return availableSlots;
}

const App = () => {

  const [bookingData, setBookingData] = useState({
        date: "",
        time: "",
        guests: "",
        occasion: "",
    });

  const [availableTime, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
      <div className='entireContainer'>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/reservations"
              element={<BookingPage
                bookingData={bookingData}
                setBookingData={setBookingData}
                availableTime={availableTime}
                dispatch={dispatch}
              />} />
              <Route path="/confirmed-booking" 
                element={<ConfirmedBooking /> } />
          </Routes>
        </main>
        <Footer />
      </div>
  );
}

export default App;
