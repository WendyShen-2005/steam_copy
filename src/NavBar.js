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
                    <TextButton title='STORE'> 
                        <DropDown>
                            <a>Featured</a>
                            <a>Discovery Queue</a>
                            <a>Wishlist</a>
                            <a>Points Shop</a>
                            <a>News</a>                        
                            <a>Stats</a>
                        </DropDown>
                    </TextButton>
                </div>

                <TextButton title='LIBRARY'> 
                    <DropDown>
                        <a>Home</a>
                        <a>Collections</a>
                        <a>Downloads</a>
                    </DropDown>
                </TextButton>

                <TextButton title='COMMUNITY'>
                    <DropDown>
                        <a>Home</a>
                        <a>Discussions</a>
                        <a>Workshops</a>
                        <a>Market</a>
                        <a>Broadcasts</a>
                    </DropDown>
                </TextButton>

                <TextButton title='WENDYSHEN2005'>
                    <DropDown>
                        <a>Activity</a>
                        <a>Profile</a>
                        <a>Friends</a>
                        <a>Groups</a>
                        <a>Content</a>
                        <a>Badges</a>
                        <a>Inventory</a>
                        <a>Year In Review</a>
                    </DropDown>
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