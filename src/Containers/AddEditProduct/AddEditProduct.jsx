import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './AddEditProduct.css'
import { useDispatch } from "react-redux";
import { addProduct, editProduct, getProducts} from "../store/actions";

const AddEditProduct = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [product, setProduct] = useState({img: '', name: '', price: ''});
    
    const onChangeHandler = (e) => {
        const {name, value} = e.currentTarget;

        setProduct(prevState => {
            return {
                ...prevState,
                [name]: value
            };
        });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        (id ? dispatch(editProduct(product, id)) : dispatch(addProduct(product)));
        navigate('/store')
        dispatch(getProducts());
    };

    return <>
        <div className="product">
            <div className="container">
                <h1 className="addEdit-product-title">Form {id ? "Edited product" : "Submit product"}</h1>
                <form className="form-submit-product" onSubmit={onSubmitHandler}>
                        <div className="input-img">
                            <label>Img link</label>
                            <input 
                                type="text"
                                name="img"
                                className="input-product"
                                value={product.img}
                                onInput={onChangeHandler}
                                required
                            />
                        </div>
                        <div>
                            <label>Name</label>
                            <input 
                                type="text"
                                name="name"
                                className="input-product"
                                value={product.name}
                                onInput={onChangeHandler}
                                required
                            />
                        </div>
                        <div>
                            <label>Price</label>
                            <input 
                                type="number"
                                name="price"
                                className="input-product"
                                value={product.price}
                                onInput={onChangeHandler}
                                required
                            />
                        </div>
                        <div>
                        {
                            product.img 
                            ?
                            <div>
                                <h6>Photo preview</h6>
                                <img src={product.img} className='product-photo-preview' alt="preview" />
                            </div> : null
                        }
                        </div>
                    <button className="submit-btn">{id ? "Edit" : "Submit"}</button>
                </form>
            </div>
        </div>
    </>
}
export default AddEditProduct;