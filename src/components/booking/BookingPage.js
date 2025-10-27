import BookingForm from './BookingForm'
import './BookingPage.css'

const BookingPage = ({bookingData, setBookingData, availableTime, dispatch}) => {
    return (
        <div className='bookingFormContainer'>
            <BookingForm
                bookingData={bookingData}
                setBookingData={setBookingData}
                availableTime={availableTime}
                dispatch={dispatch}
            />
        </div>
    )
}

export default BookingPage;