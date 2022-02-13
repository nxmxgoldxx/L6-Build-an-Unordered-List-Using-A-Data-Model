import React from "react";
import FiltersList from "./Filters/index";
import { filterData, hotelData } from "./data.js";
//TODO: import the data model for your list of filters

const App = () => (
  <div className="App">
    {/* TODO: pass your data model as a prop to your FiltersList component */}
    <FiltersList  filters={filterData} />
    <HotelsList hotels={hotelData} />
    </div>
);




export default App;
