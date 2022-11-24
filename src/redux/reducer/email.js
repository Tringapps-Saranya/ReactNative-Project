import {EMAIL} from '../constant';

const initialState = {
    email:''
}

export const email = (state = initialState,action) => {
    switch(action.type){
        case EMAIL:
            return action.user;
        default: 
            return state;
    }
}
