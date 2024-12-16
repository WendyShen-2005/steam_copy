import './PageHeader.css';
import TextButton from './TextButton';

const PageHeader = () => {
    return ( 
        <div className="page-header">

            <div id='wishlist'>
                <button>Wishlist</button>
            </div>

            <div id="other-nav-bar">
                <div>
                    <img alt='none'/>
                    <TextButton class="text-button1" dropdownClass="drop-down1" title="Your Store">
                        <a>Home</a>
                        <a>Followed Games & Software</a>
                        <a>Preferences</a>
                        <br/>
                        <h1>RECOMMENDATIONS</h1>
                        <a>Discovery Queue</a>
                        <a>New Releases Queue</a>
                        <a>Community Recommendations</a>
                        <a>Interactive Recommender</a>
                        <a>Popular Among Friends</a>
                        <a>Stream Curators</a>
                        <a>DLC For You</a>
                        <br/>
                        <div style={{
                            display: "flex", 
                            justifyContent: "space-between"
                        }}>
                            <h1>BECAUSE YOU LOVE</h1>
                            <h1>(?)</h1>
                        </div>
                        <a>Hero Shooter</a>
                        <a>Dwarf</a>
                        <a>Open World Survival Craft</a>
                        <a>Horror</a>
                        <a>More Tags for You...</a>
                    </TextButton>

                    <TextButton class="text-button1" dropdownClass="drop-down1" title="News & Noteworthy">
                        <div>
                            <div className='drop-down-list'>
                                <h1>POPULAR</h1>
                                <a>Top Sellers</a>
                                <a>Most Played</a>
                                <hr/>
                                <a>New Releases</a>
                                <a>Upcoming Releases</a>
                                <br/>
                                <h1>NEWS & UPDATES</h1>
                                <a>Recently Updated</a>
                            </div>
                            <div className='drop-down-list'>
                                <h1>PROMO & EVENTS</h1>
                                <a>Special Offers</a>
                                <a>Sale Events</a>
                                <hr/>
                                <a>Steam Year in Review</a>
                                <a>Steam Next Fest</a>
                                <a>The Steam Awards</a>
                            </div>
                        </div>
                    </TextButton>

                    <TextButton class="text-button1" dropdownClass="drop-down1" title="Categories">
                        <div>
                            <div className='drop-down-list'>
                                <h1>SPECIAL SECTIONS</h1>
                                <a>Free to Play</a>
                                <a>Demos</a>
                                <a>Early Access</a>
                                <hr/>
                                <a>Steam Deck</a>
                                <a>Great on DecK</a>
                                <hr/>
                                <a>Controller-Friendly</a>
                                <a>Remote Play</a>
                                <hr/>
                                <a>VR Titles</a>
                                <a>VR Hardware</a>
                                <hr/>
                                <a>Software</a>
                                <a>Soundtracks</a>
                                <hr/>
                                <a>macOS</a>
                                <a>SteamOS + Linux</a>
                                <a>For PC Cafés</a>
                            </div>
                            <div className='drop-down-list'>
                                <h1>GENRES</h1>
                                <a>Action</a>
                                <a>Aracde & Rhythm</a>
                                <a>Fighting & Martial Arts</a>
                                <a>First Person Shooter</a>
                                <a>Hack & Slash</a>
                                <a>Platformer & Runner</a>
                                <a>Third-Person Shooter</a>
                                <a>shmup</a>
                                <br/>
                                <a>Adventure</a>
                                <a>Adventure RPG</a>
                                <a>Casual</a>
                                <a>Hidden Object</a>
                                <a>Metroidvania</a>
                                <a>Puzzle</a>
                                <a>Story-Rich</a>
                                <a>Visual Novel</a>
                            </div>
                            <div className='drop-down-list'>
                            </div>
                            <div className='drop-down-list'>
                            </div>
                            <div className='drop-down-list'>
                            </div>
                        </div>
                    
                    </TextButton>

                    <TextButton class="text-button1" title="Points Shop"></TextButton>
                    <TextButton class="text-button1" title="News"></TextButton>
                    <TextButton class="text-button1" title="Labs"></TextButton>
                </div>
                <div>
                    <input type='text'/>
                    <button>Search</button>
                </div>
            </div>

            <div id="games-nav">
                <a href='google.com'>All Games</a> 
                <p>&gt;</p>
                <a href='google.com'>Indie Games</a>
                <p>&gt;</p>
                <a href='google.com'>Terraria</a>
            </div>

            <div id="title-and-community">
                <h1>Terraria</h1>
                <button>Community Hub</button>
            </div>
        </div>
     );
}
 
export default PageHeader;