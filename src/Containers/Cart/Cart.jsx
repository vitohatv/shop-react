import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAtCartProduct, getCartItems } from "../store/actions";
import './Cart.css'
import { NavLink } from "react-router-dom";
import Loader from "../../Components/UI/Loader/Loader";

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const loader = useSelector((state) => state.loader);

    useEffect(() => {
        dispatch(getCartItems());
    }, [dispatch]);

    return <>
        <div className="cart">
            <div className="container">
                <h1 className='cart-page'><NavLink className='link-to-main' to='/'>Главная</NavLink> / Корзина</h1>
                <h2 className='cart-title'>Корзина товаров</h2>
                <div className="cart-items">
                    <Loader isLoading={loader}/>
                    {
                        cart ?
                        Object.keys(cart).map(id => {
                            return <div className="cart-content-wrapper" key={id}>
                                <div className="cart-item" key={id}>
                                    <img className="cart-item-photo" src={cart[id].img} alt="cart-product-img" />
                                    <p className="cart-item-name">{cart[id].name}</p>
                                    <p className="cart-item-price">{cart[id].price} ₸</p>
                                    <div className="cart-buttons">
                                        <button 
                                            className="cart-delete-product-btn" 
                                            onClick={() => dispatch(deleteAtCartProduct(id))}
                                        >Убрать из корзины</button>
                                    </div>
                                </div>
                            </div>
                        }) : <p className="cart-empty-text">Cart items is empty..</p>
                    }
                </div>
            </div>
        </div>
    </>
}
export default Cart;