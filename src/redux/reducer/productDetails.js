import {PRODUCT_DETAILS} from '../constant';

const initialState = {
    productDetails: null,
};

const productDetails = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS:
      return action.payload;
    default:
      return state;
  }
};
export default productDetails;
