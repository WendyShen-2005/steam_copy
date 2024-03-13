import './GameInfo.css';
import screenshot_1 from "./game-pictures/screenshot_1.png";
import terrariaBanner from "./game-pictures/terraria-banner.png";

const GameInfo = () => {
    return ( 
        <div className="game-info">
            <div style={{display:"flex"}}>
                <div id="game-pictures">
                    <img src={screenshot_1} alt="game"/>
                    <img alt="list of other game pics"/>
                </div>
                <div id="description">
                    <img src={terrariaBanner} alt="terraria banner"/>
                    <p style={{color: "rgb(167,173,201)"}}>
                        Dig, fight, explore, build! Nothing is impossible in this action-packed adventure game. Four Pack also available!
                    </p>
                    <br/>
                    <div className="game-stats">
                        <p>RECENT REVIEWS:</p>
                        <a className="no-hover">Overwhelmingly Positive <span>(9,200)</span></a>
                    </div>
                    <div className="game-stats">
                        <p>ALL REVIEWS:</p>
                        <a className="no-hover">Overwhelmingly Positive <span>(1,004,183)</span></a>
                    </div>
                    <br/>
                    <div className="game-stats">
                        <p>RELEASE DATE:</p>
                        <a style={{color:"var(--light-grey)"}}>16 May, 2011</a>
                    </div>
                    <br/>
                    <div className="game-stats">
                        <p>DEVELOPER:</p>
                        <a>Re-logic</a>
                    </div>
                    <div className="game-stats">
                        <p>PUBLISHER:</p>
                        <a>Re-logic</a>
                    </div>
                    <br/>
                    <p>Popular user-defined tags for this product:</p>
                    <div id="tags">
                        <button>Open World Survival Craft</button>
                        <button>Sandbox</button>
                        <button>Survival</button>
                        <button>2D</button>
                        <button>+</button>
                    </div>
                </div>
            </div>
            <div id="game-option-buttons">
                <div>
                    <button>Add to your wishlist</button>
                    <button>Follow</button>
                    <button>Ignore</button>
                    <button>v</button>
                </div>
                <button>View Your Queue</button>
            </div>
        </div>
     );
}
 
export default GameInfo;