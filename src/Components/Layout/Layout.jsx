import {Outlet, NavLink} from 'react-router-dom';
import './Layout.css';
const Layout = () => {
    return <>
        <header className='header'>
            <div className='container'>
                <div className='header-wrapper'>
                    <div className='logo'>
                        <NavLink className='header-link' to='/'>Shop</NavLink>
                    </div>
                    <div className='header-links'>
                        <NavLink className='header-link' to='/store'>Store</NavLink>
                        <NavLink className='header-link-cart' to='/cart'>Cart</NavLink>
                        <NavLink className='header-link-cart' to='/create-product'>Create new product</NavLink>
                    </div>
                </div>
            </div>
        </header>
        <main>
            <Outlet />
        </main>
    </>;
}

export default Layout;