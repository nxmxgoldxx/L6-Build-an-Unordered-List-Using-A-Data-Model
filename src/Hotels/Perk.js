import React from "react";

const Perk = (props) => {
    if (props.hasPerk) {
        return <span className="hotel__perks">{props.perk}</span>
    } else {
        return nulls;
    }
 };

 export default Perk;