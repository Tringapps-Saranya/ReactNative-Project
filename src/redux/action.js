import { EMAIL , PRODUCT_LIST , PRODUCT_DETAILS, CART_DATA} from "./constant"

export const productList = () => {
    return {
        type: PRODUCT_LIST,
    }
}

export const email = (user) => {
    return{
        type: EMAIL,
        payload: user
    }
}

export const productDetails = (product) =>{
    return {
        type: PRODUCT_DETAILS,
        payload: product
    }
}

export const cartData = (product) => {
    return {
        type: CART_DATA,
        payload: product
    }
}