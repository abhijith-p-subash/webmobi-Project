import React from 'react';

import { IoNotificationsCircle, IoChatbubblesSharp, IoCogSharp } from "react-icons/io5";
import './sideBarRight.css';

function sideBarRight() {
    return (
        <div className="root-right">
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdX7wWCMOvGYD6_4-MthVKf-DjjgLF_GqQzg&usqp=CAU" alt="avatar" />
                <div className="indicator-v"></div>
            </div>
            <div className="icon-links">
                <div className="icon-sub">
                    <IoNotificationsCircle className="icon" />
                    <div className="indicator-g"></div>
                </div>
            </div>
            <div className="icon-links">
                <div className="icon-sub">
                    <IoChatbubblesSharp className="icon" />
                    <div className="indicator-g"></div>
                </div>
            </div>
            <div className="icon-links">
                <div className="icon-sub">
                    <IoCogSharp className="icon" />
                    {/* <div className="indicator-g"></div> */}
                </div>
            </div>
        </div>
    )
}

export default sideBarRight;
