import React, {useState} from "react";
import cities from "./data";

function Dropdown() {
    const cityList  = cities.filter(city => city.toLowerCase().match(query.toLowerCase())).map((city, key) => {
        return <li onClick={setDropdownVisible===false} className="cities-list" key={key}>{city}</li>
    });
    const [dropdownVisible, setDropdownVisible] = useState(true);
    return (
         <div className="dropdown">{cityList}</div>
    );
};
export default Dropdown;