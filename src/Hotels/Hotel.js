import React from "react";
import Perk from "./Perk.js";
import RoomsLeft from "./RoomsLeft.js";
import BestsellerFlag from "./BestsellerFlag.js";

/* functional component
    - accepts the data model for a single hotel as a prop
    - uses that data to render the UI for a single hotel in the list
*/

const Hotel = (props) => (
    <li className="hotel">
    <img 
    src={props.hotel.imageSrc}
    alt="hotel main entrance"
    className="hotel__image"
    />
    <div className="hotel__text">
        <div className="hotel__header">
            <h3 className="hotel__name"></h3>
            <span className="hotel__rating">{props.hotel.rating}</span>
    </div>
    <div className="hotel__main">
        <div>
            <span>{props.hotel.reviewCount} reviews</span>
        <Perk 
        perk="Free Cancellation"
        hasPerl={props.hotel.hasFreeCancellation}
        />
        <Perk
        perk="Free Breakfast"
        hasPerk={props.hotel.includesBreakfast}
        />
        <Perk perk="Onsite Parking" has perk={props.hotel.hasParking} />
        <Perk perk="Pet friendly building" has Perk={props.hotel.allowPets} />
        <Perk 
        perk="Order food to your room"
        hasPerk={props.hotel.hasRoomService}
        />
        <Perk
        perk="Fitness center access"
        hasPerk={props.hotel.hasFItnessCenter}
        />
        <RoomsLeft roomsRemaining={props.hotel.roomsRemaining} />
        </div>
        <div className="hotel__main__right">
            <span>
                <span className="hotel__price">${props.hotel.pricePerNight}</span>{" "}
                per night
            </span>
            <span>Includes taxes and charges</span>
            <button className="hotel__see-rooms">
            See our available rooms >
            </button>
            </div> 
        </div>
    </div>
    <BestsellerFlag isBestSeller={props.hotel.isBestSeller} />
</li>
);

export default Hotel;