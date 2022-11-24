import {combineReducers} from 'redux'
import {productData} from './productData'
import { email } from './email'
import productDetails from './productDetails'
import cartData from './cartData'

export default combineReducers({
    productData: productData,
    email: email,
    productDetails: productDetails,
    cartData: cartData
})