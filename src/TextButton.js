import { useState, useRef, useEffect } from 'react';
import DropDown from './DropDown';

const TextButton = (props) => {

    const [open, setOpen] = useState(false);
    const buttonRef = useRef(null);
    const dropdownRef = useRef(null);

    const handleMouseOver = () => {
        setOpen(true);
    }
    const handleMouseOut = () => {
        setOpen(false);
    }

    useEffect (() => {
        console.log("hello")
        if(buttonRef.current && dropdownRef.current) {
            const buttonWidth = buttonRef.current.offsetWidth;
            dropdownRef.current.style.minWidth = buttonWidth + 'px';
        }
    },[]);

    return ( 
        <div className={props.class}>
            <button ref={buttonRef} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                {props.title}
                { open && <DropDown ref={dropdownRef} class={props.dropdownClass}>
                        {props.children}
                    </DropDown> }
            </button>
        </div>
     );
}
 
export default TextButton;