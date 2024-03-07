const GameInfo = () => {
    return ( 
        <div>
            <div style={{display:"flex"}}>
                <div>
                    <img alt="game picture"/>
                    <img alt="list of other game pics"/>
                </div>
                <div>
                    <img alt="terraria banner"/>
                    <p>Dig, fight, explore, build! Nothing is impossible in this action-packed adventure game. Four Pack also available!</p>

                    <h3>review game stats stuff</h3>

                    <p>Popular user-defined tags for this product:</p>
                    <div style={{display:"flex"}}>
                        <button>Open World Survival Craft</button>
                        <button>Sandbox</button>
                        <button>Survival</button>
                        <button>2D</button>
                        <button>+</button>
                    </div>
                </div>
            </div>
            <div style={{display:"flex", justifyContent:"space-between"}}>
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