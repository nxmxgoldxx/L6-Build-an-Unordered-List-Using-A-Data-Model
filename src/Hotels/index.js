import React from "react";
import Hotel from "Hotel.js";

const renderHotel = (hotel) => <Hotel key={hotel.id} hotel={hotel} />;

const HotelList = (props) => {
    if (!props.hotels) {
        return null;
    }
const hotelListElements = props.hotels.map(renderHotel);
return <ul className="hotel-list">{hotelListElements}</ul>;
}

export default HotelList;