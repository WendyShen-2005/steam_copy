import { useState } from 'react';

const TextButton = (props) => {

    const [open, setOpen] = useState(false);

    const handleMouseOver = () => {
        setOpen(true);
    }

    const handleMouseOut = () => {
        setOpen(false);
    }

    return ( 
        <div className='text-button'>
            <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                {props.title}
                {open && props.children}
            </button>
        </div>
     );
}
 
export default TextButton;