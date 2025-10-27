// import {useState} from "react"
import { useNavigate } from "react-router-dom";

const BookingForm = ({bookingData, setBookingData, availableTime, dispatch}) => {

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setBookingData((prevValues) => ({
            ...prevValues,
            [id]: value,
        }))
        if (id === "date") dispatch(value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        /* submit data to database */
        window.submitAPI = (formData) => {
            return true;
        };
        const submissionResult = window.submitAPI(bookingData);
        if (submissionResult) {
            setBookingData({
            date: "",
            time: "",
            guests: "",
            occasion: "",
            })
            alert("Submission success!");
            navigate("/confirmed-booking");
        } else {
            alert("Something is wrong with the form submission. Try again.");
        }
    };

    const AvailableSlots = ({availableTime}) => {
        return (
            <>
                {availableTime.map(
                    (item) => (
                        <option
                            key={item}
                            value={item}
                            // disabled={!availableTime.includes(item)}
                            >
                                {item}
                        </option>
                    ))}
            </>
        );
    };

    return (
        <div class='bookingForm'>
            <h2 className="reservationHeading">Make a reservation</h2>
            <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
                <label htmlFor="date">Choose date</label>
                <input
                    type="date"
                    id="date"
                    value={bookingData.date}
                    onChange={handleChange}
                />

                <label htmlFor="time">Choose time</label>
                <select
                    id="time"
                    value={bookingData.time}
                    onChange={handleChange}
                >
                    <option value="">Select a time</option>
                    <AvailableSlots availableTime={availableTime}/>

                </select>

                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={bookingData.guests}
                    onChange={handleChange}
                />

                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    value={bookingData.occasion}
                    onChange={handleChange}
                >
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>

                <input type="submit" value="Make Your Reservation" />
            </form>
        </div>
    );
}

export default BookingForm;