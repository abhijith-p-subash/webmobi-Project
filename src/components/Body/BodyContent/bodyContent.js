import React from 'react';
import Table from "./Table";

import { BsX, BsChevronUp } from "react-icons/bs";
import { IoMdChatboxes } from "react-icons/io"
import "./bodyContent.css";

function bodyContent(props) {
    return (
        <div className="root-content">
            <div onClick={()=>props.close(false)} className="cross"><BsX className="cross-icon" /></div>
            <div className="content">
                <div className="content-header">
                    <div className="left">
                        <IoMdChatboxes className="head-icon" />
                        <h2>Audience Q&A</h2>
                    </div>
                    <div className="right">
                        <label className="switch">
                            <input type="checkbox" checked/>
                            <span className="slider"></span>
                        </label>
                        <i><BsChevronUp /></i>
                    </div>
                </div>
                <hr />
                <div className="content-body">
                    <Table 
                        h="Moderation"
                        p="Easily review all questions they go live."
                    />
                    <Table 
                        h="Labels"
                        p="Categorize and filter questions."
                    />
                    <Table 
                        h="Downloads"
                        p="Enable downloading of questions."
                    />
                    <Table 
                        h="Replies"
                        p="Allow participants to reply to or comment on questions."
                    />
                    <Table 
                        h="Anonymous questions"
                        p="Let your participants send anonymous questions."
                    />
                    <Table 
                        h="Maximum questions length"
                        p="Show number of votes instead od percentage."
                        b="true"
                    />
                    <Table 
                        h="Close questions"
                        p="Prevent the participants from sending new questions to your event."
                    />
                </div>
                <div className="save">
                    <button>Save</button>
                </div>
            </div>
        </div>
    )
}

export default bodyContent;
