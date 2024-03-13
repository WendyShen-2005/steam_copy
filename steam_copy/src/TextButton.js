import { useState, useRef, useEffect } from 'react';
import DropDown from './DropDown';

const TextButton = (props) => {

    const [open, setOpen] = useState(false);
    const buttonRef = useRef(null);
    const dropdownRef = useRef(null);

    const handleMouseOver = () => {
        setOpen(true);
        if(props.children){
            dropdownRef.current.style.display = "flex";
        }
    }
    const handleMouseOut = () => {
        setOpen(false);
        dropdownRef.current.style.display = "none";
    }

    useEffect (() => {
        if(buttonRef.current && dropdownRef.current) {
            dropdownRef.current.style.display = "none";
            const buttonWidth = buttonRef.current.offsetWidth;
            dropdownRef.current.style.minWidth = buttonWidth + 'px';
        }
    },[]);

    return ( 
        <div className={props.class}>
            <button ref={buttonRef} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                {props.title}
                <DropDown ref={dropdownRef} class={props.dropdownClass}>
                    { open && props.children}
                </DropDown>
            </button>
        </div>
     );
}
 
export default TextButton;