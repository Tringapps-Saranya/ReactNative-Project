import {CART_DATA} from '../constant';

const initialState = {
    cartData: [],
};

const cartData = (state = initialState, action) => {
  switch (action.type) {
    case CART_DATA:
        return {
            ...state,
            cartData: [...state.cartData, action.payload]
        }
    default:
      return state;
  }
};

export default cartData;


