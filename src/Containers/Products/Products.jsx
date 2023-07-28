import { useEffect} from 'react';
import './Products.css'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteProduct, getProducts } from '../store/actions';
import Loader from '../../Components/UI/Loader/Loader';

const Products = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector((state) => state.products);
    const loader = useSelector((state) => state.loader);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    return (
        <div className='store-render'>
            <div className='container'>
                <h1 className='category-page'><NavLink className='link-to-main' to='/'>Главная</NavLink> / Каталог товаров</h1>
                <h2 className='catalog-title'>Каталог товаров</h2>
                <div className='store-products-wrapper'>
                    <Loader isLoading={loader}/>
                        {
                        products ?
                        Object.keys(products).map(id => {
                                return <div className='product-block' key={id}>
                                    <div className='product-content'>
                                        <img className='product-img' src={products[id].img} alt='product-img'/>
                                        <p className='product-name'>{products[id].name}</p>
                                        <div>
                                            <p className='product-price'>{products[id].price} ₸</p>
                                        </div>
                                        <div className='product-buttons'>
                                            <span className='delete-product-btn' onClick={() => dispatch(deleteProduct(id))}>X</span>
                                            <button className='add-to-cart-btn' onClick={() => dispatch(addToCart(products[id]))}>В корзину</button>
                                            <button className='edit-btn' onClick={() => navigate(`/store/${id}/edit`)}>Редактировать</button>
                                        </div>
                                    </div>
                                </div>
                            })
                            : <p>Store products is empty</p>
                        }
                </div>
            </div>
        </div>
    )
}

export default Products;