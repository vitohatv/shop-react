import {FETCH_ADD_SUCCESS, FETCH_EDIT_SUCCESS, FETCH_DELETE_SUCCESS, FETCH_GET_SUCCESS, FETCH_ADD_TO_CART, FETCH_GET_CART_PRODUCTS, FETCH_DELETE_AT_CART } from './actionTypes';

const initialState = {
    products: {}, 
    cart: [],
    loader: true
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ADD_SUCCESS: 
            return {...state, products: action.products};
        case FETCH_EDIT_SUCCESS:
            return {...state, products: action.products};
        case FETCH_DELETE_SUCCESS:
            let products = {...state.products};
            delete products[action.id];
            return {...state, products};
        case FETCH_GET_SUCCESS:
            return {...state, products: action.products, loader: false};
        case FETCH_ADD_TO_CART:
            return {...state, cart: action.cart};
        case FETCH_DELETE_AT_CART: 
            let cart = {...state.cart};
            const product = {...state.products};
            delete cart[product.id];
            return {...state, cart};
        case FETCH_GET_CART_PRODUCTS:
            return {...state, cart: action.cart, loader: false};
        default:
            return state;
    }
}

export default reducer;