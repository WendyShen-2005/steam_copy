import React from "react";

const DropDown = React.forwardRef((props, ref) => {

    return ( 
        <div className={props.class} ref={ref}>
            {props.children}
        </div>
     );
})
 
export default DropDown;