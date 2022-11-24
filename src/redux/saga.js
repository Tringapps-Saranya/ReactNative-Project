import {put, all, call} from 'redux-saga/effects';
import {PRODUCT_LIST} from './constant';
import axios from 'axios';

function* Products() {
  let {data} = yield call(getProducts);
  if (data) {
    yield put({
      type: PRODUCT_LIST,
      data,
    });
  }
}

const getProducts = async () => {
  try {
    let response = await axios.get('https://dummyjson.com/products');
    let data = response.data;
    return {data};
  } catch (error) {
    console.log('error', error);
  }
};

function* saga() {
  yield all([Products()]);
}

export default saga;
