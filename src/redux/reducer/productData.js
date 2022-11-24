import {PRODUCT_LIST} from '../constant';

export const productData = (data = [], action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      return action.data;
    default:
      return data;
  }
};
