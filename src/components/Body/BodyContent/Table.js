import React from 'react'

function Table(props) {
    return (
        <table>
            <tr>
                <td>
                    <h3 style={{ fontWeight: "bolder" }}>{props.h}</h3>
                    <p style={{ color: "#828282" }}>{props.p}</p>
                    {props.b ? 
                    <div className="radio-toolbar">
                        <input type="radio" name="num" id="num1" value="160"/>
                        <label htmlFor="num1" >160</label>

                        <input type="radio" name="num" id="num2" value="240"/>
                        <label htmlFor="num2" >240</label>

                        <input type="radio" name="num" id="num3" value="300"/>
                        <label htmlFor="num3" >300</label>
                    </div>
                    : ""} 
                </td>
                <td>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                    </label>
                </td>
            </tr>
        </table>
    )
}

export default Table;
