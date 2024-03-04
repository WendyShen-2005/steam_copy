import './PageHeader.css';

const PageHeader = () => {
    return ( 
        <div className="page-header">
            <button>Wishlist</button>
            <div id="other-nav-bar">
                <div>
                    <img/>
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
        </div>
     );
}
 
export default PageHeader;