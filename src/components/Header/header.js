import React from 'react';

import {BsFillBarChartFill} from "react-icons/bs";
import {FaMobileAlt} from "react-icons/fa";
import {MdLaptopMac} from "react-icons/md";
import "./header.css";

function header() {
    return (
        <div className="root-header">
            <div className="header-brand">
                <BsFillBarChartFill className="brand-icon"/>
                <h1>Admin Dashboard</h1>
            </div>
            <div className="header-left">
                <h3>Preview on: </h3>
                <FaMobileAlt className="header-icons"/>
                <MdLaptopMac className="header-icons"/>
            </div>
        </div>
    )  
}

export default header;
