import './PageHeader.css';

const PageHeader = () => {
    return ( 
        <div className="page-header">

            <div id='wishlist'>
                <button>Wishlist</button>
            </div>

            <div id="other-nav-bar">
                <div>
                    <img alt='none'/>
                    <button className='text-button1'>Your Store</button>
                    <button className='text-button1'>New & Noteworthy</button>
                    <button className='text-button1'>Categories</button>
                    <button className='text-button1'>Points Shop</button>
                    <button className='text-button1'>News</button>
                    <button className='text-button1'>Labs</button>
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