import { useState } from "react";
import './DropDown.css';

const DropDown = (props) => {

    // see if this drop down is openned

    return ( 
        <div className="drop-down">
            {props.children}
        </div>
     );
}
 
export default DropDown;