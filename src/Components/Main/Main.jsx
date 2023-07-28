import './Main.css';
import banner from '../../img/Banner.png'
import { NavLink } from 'react-router-dom';
const Main = () => {
    return <>
        <div className="main">
            <div className="container">
                <h1 className="main-title">Главная</h1>
                <div className="main-wrapper">
                    <h2 className="main-subtitle">Акции магазина</h2>
                    <NavLink to='/store' className='main-link-check-store'>Посмотреть товар </NavLink>  
                </div>
                <div className='main-banners'>
                    <img className='banner-pets' src={banner} alt='banner_pets'/>
                </div>
            </div>
        </div>
    </>
}
export default Main;