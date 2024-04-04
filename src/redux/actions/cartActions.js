import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';

export const addToCart = (id, quantity,account) => async (dispatch) => {
    try { 
        const { data } = await axios.get(`https://api.flipkarttech.com/product/${id}`);
        await axios.post('https://api.flipkarttech.com/cart', { id, quantity, account });
        dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });

    } catch (error) {
        console.log('Error while calling cart API');
    }
};

export const removeFromCart = (id) => (dispatch) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

};