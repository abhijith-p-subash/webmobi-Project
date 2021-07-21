import React from 'react';

import { RiBarChartBoxFill } from "react-icons/ri";
import { IoIosPeople, IoIosMailOpen, IoMdAnalytics } from "react-icons/io";
import './sideBarLeft.css';

function sideBarLeft(props) {
    return (
        <div className="root-left">
            <img src="https://images-platform.99static.com//RErXRmTQE570nVtE45b97mZDZww=/640x646:1140x1146/fit-in/590x590/99designs-contests-attachments/104/104570/attachment_104570557" alt="logo" />
            <div onClick={()=>{
                props.toggle(true);
            }} className="nav-link">
                <RiBarChartBoxFill for className="icon" />
                <h4>Event</h4>
            </div>
            <div className="nav-link">
                <IoIosPeople className="icon" />
                <h4>Teams</h4>
            </div>
            <div className="nav-link">
                <IoMdAnalytics className="icon" />
                <h4>Analytics</h4>
            </div>
            <div className="nav-link">
                <IoIosMailOpen className="icon" />
                <h4>Message</h4>
            </div>
        </div>
    )
}

export default sideBarLeft;
