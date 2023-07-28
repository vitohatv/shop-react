import api from "../../api/axiosInstances";
import { FETCH_ADD_SUCCESS, FETCH_ADD_TO_CART, FETCH_DELETE_SUCCESS, FETCH_EDIT_SUCCESS, FETCH_GET_SUCCESS, FETCH_GET_CART_PRODUCTS, FETCH_DELETE_AT_CART } from "./actionTypes";

const fetchAddSuccess = (products) => {
    return {type: FETCH_ADD_SUCCESS, products};
}
 
export const addProduct = (data) => {
    return async (dispatch) => {
        const response = await api.post('/store.json', data);
        dispatch(fetchAddSuccess(response.data));
    };
}

const fetchEditSuccess = (products) => {
    return {type: FETCH_EDIT_SUCCESS, products};
}

export const editProduct = (data, id) => {
    return async (dispatch) => {
        await api.put(`/store/${id}.json`, data);
        dispatch(fetchEditSuccess(data.id));
    };
}

const fetchDeleteProduct = id => {
    return {type: FETCH_DELETE_SUCCESS, id};
}

export const deleteProduct = (id) => {
    return async (dispatch) => {
        await api.delete(`/store/${id}.json`);
        dispatch(fetchDeleteProduct(id));
    }
}

const fetchGetProducts = (products) => {
    return {type: FETCH_GET_SUCCESS, products}
}

export const getProducts = () => {
    return async(dispatch) => {
        const response = await api.get(`/store.json`);
        dispatch(fetchGetProducts(response.data));
    }
}

const fetchAddToCartSuccess = (cart) => {
    return {type: FETCH_ADD_TO_CART, cart};
}

export const addToCart = (id) => {
    return async (dispatch) => {
        const response = await api.post('/cart.json', id);
        dispatch(fetchAddToCartSuccess(response.data));
    };
}

const fetchGetCartItemsSuccess = (cart) => {
    return {type: FETCH_GET_CART_PRODUCTS, cart}
}

export const getCartItems = () => {
    return async (dispatch) => {
        const response = await api.get(`/cart.json`);
        dispatch(fetchGetCartItemsSuccess(response.data));
    };
}

const fetchDeleteAtCartProduct = (cart) => {
    return {type: FETCH_DELETE_AT_CART, cart}
}

export const deleteAtCartProduct = (id) => {
    return async (dispatch) => {
        await api.delete(`/cart/${id}.json`);
        dispatch(fetchDeleteAtCartProduct(id));
        dispatch(getCartItems());
    }
}