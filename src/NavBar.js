import './NavBar.css';

const NavBar = () => {
    return (  
        <div className="NavBar">
            <div>
                <button className='icon'>Back</button>
                <button className='icon'>Forward</button>
                <button className='text-button' id='selected'>STORE</button>
                <button className='text-button'>LIBRARY</button>
                <button className='text-button'>COMMUNITY</button>
                <button className='text-button'>WENDYSHEN2005</button>
            </div>
            <div>
                <button className='icon'>Reload</button>
                <button id='link-copy'>
                    <img/>
                    https://store.steampowered.com/app/105600/Terraria/
                </button>
            </div>
        </div>
    );
}
 
export default NavBar;