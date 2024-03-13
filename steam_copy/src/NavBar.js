import './NavBar.css';
import DropDown from './DropDown';
import TextButton from './TextButton';

const NavBar = () => {
    return (  
        <div className="NavBar">
            <div>
                <button className='icon'>Back</button>
                <button className='icon'>Forward</button>

                <div id='selected'>
                    <TextButton class='text-button' dropdownClass='drop-down' title='STORE'> 
                        <a>Featured</a>
                        <a>Discovery Queue</a>
                        <a>Wishlist</a>
                        <a>Points Shop</a>
                        <a>News</a>                        
                        <a>Stats</a>
                    </TextButton>
                </div>

                <TextButton class='text-button' dropdownClass='drop-down' title='LIBRARY'> 
                    <a>Home</a>
                    <a style={{borderBottom: "solid var(--light-grey) 1px"}}>Collections</a>
                    <a>Downloads</a>
                </TextButton>

                <TextButton class='text-button' dropdownClass='drop-down' title='COMMUNITY'>
                    <a>Home</a>
                    <a>Discussions</a>
                    <a>Workshops</a>
                    <a>Market</a>
                    <a>Broadcasts</a>
                </TextButton>

                <TextButton class='text-button' dropdownClass='drop-down' title='WENDYSHEN2005'>
                    <a>Activity</a>
                    <a>Profile</a>
                    <a>Friends</a>
                    <a>Groups</a>
                    <a>Content</a>
                    <a>Badges</a>
                    <a>Inventory</a>
                    <a>Year In Review</a>
                </TextButton>

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