import React from 'react';

import {RiLock2Fill} from "react-icons/ri";
import "./bodySideBar.css";

function bodySideBar() {
    return (
        <div className="event">
                <div>
                <h2>Event settings</h2>
                <hr />
                </div>
                <div className="body-list">
                    <div className="list-item">
                        <h3>General</h3>
                    </div>
                    <div className="list-item">
                        <h3>Privacy</h3>
                    </div>
                    <div className="list-item">
                        <h3>Features</h3>
                    </div>
                    <div className="list-item">
                        <h3>Customization</h3>
                    </div>
                    <div className="list-item">
                        <h3>Integration</h3>
                    </div>
                    <div className="list-item">
                        <h3>Session Settings <span><RiLock2Fill/></span></h3>
                        
                    </div>
                    <div className="list-item">
                        <h3>My Plans</h3>
                    </div>
                </div>
            </div>
    )
}

export default bodySideBar
