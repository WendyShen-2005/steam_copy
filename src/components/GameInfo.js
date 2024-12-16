import "./GameInfo.scss";
const GameInfo = () => {
    return ( 
        <div style={{margin:"0 75px", width:"100%"}}>
            <div style={{display:"flex"}}>
                <div style={{marginRight:"25px", width:"40%"}}>
                    <div>
                        <iframe style={{width:"100%"}} src="https://www.youtube.com/embed/w7uOhFTrrq0" title="Terraria Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                        
                        <img src="images/listOfImgs.jpg" alt="list of other game pics"/>
                    </div>

                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <div className="pop-tags">
                            <button>Add to your wishlist</button>
                            <button>Follow</button>
                            <button>Ignore</button>
                            <button>v</button>
                        </div>
                        <div className="pop-tags">
                            <button>View Your Queue</button>
                        </div>
                    </div>
                </div>

                <div style={{width:"50%"}}>
                    <img style={{width:"100%"}} src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg?t=1731252354" alt="terraria banner"/>
                    <p style={{color:"white"}}>Dig, fight, explore, build! Nothing is impossible in this action-packed adventure game. Four Pack also available!</p>

                    <div className="stats">
                        <div  style={{display:"flex"}}>
                            <div>
                                <p>RECENT REVIEWS:</p>
                                <p>ALL REVIEWS:</p>
                                <br/>
                                <p>RELEASE DATE:</p>
                                <br/>
                                <p>DEVELOPER:</p>
                                <p>PUBLISHER:</p>
                            </div>
                            <div>
                                <p><span className="blue">Overwhelmingly Positive</span> (9000)</p>
                                <p><span className="blue">Overwhelmingly Positive</span> (9000)</p>
                                <br/>
                                <p>16 May, 2011</p>
                                <br/>
                                <p><span className="blue">Re-logic</span></p>
                                <p><span className="blue">Re-logic</span></p>
                            </div>
                        </div>
                        <br/>
                        <p>Popular user-defined tags for this product:</p>
                        <div style={{display:"flex"}} className="pop-tags">
                            <button>Open World Survival Craft</button>
                            <button>Sandbox</button>
                            <button>Survival</button>
                            <button>2D</button>
                            <button>+</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default GameInfo;