import React from 'react';
import BodySideBar from "./BodySideBar/bodySideBar";
import BodyContent from "./BodyContent/bodyContent";
import "./body.css"

function body(props) {
    return (
        <div className="root-body">
            <BodySideBar/>
            <BodyContent close={props.toggle}/>
        </div>
    )
}

export default body;
