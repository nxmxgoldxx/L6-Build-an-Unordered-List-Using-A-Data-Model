import React from "react";

const RoomsLeft = (props) => {
    if (props.roomsRemaining < 10) {
        return (
            <span className="hotel__rooms-remaining">
            Only {props.roomRemaining} rooms left;
                </span>
        );
    } else { 
        return null;
    }
};

export default RoomsLeft;