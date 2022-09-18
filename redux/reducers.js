import {ADD,SUB,ADD_VAL,ADD_CART,DEL_CART} from './actions';
//inital state of the counter
const initCount = {
    count:0,
}
export const countReducer = (state = initCount,action)=>{
    switch (action.type) {
        case ADD:
            return {...state,count:state.count+1}; //state.count: the previous value of the count 
            //action.payload : that means the new value taken from the action "from TextInput for example" 
            break;
        case SUB:
            return {...state,count:state.count-1}; //state.count: the previous value of the count 
            break;
        case ADD_VAL:
            return {...state,count:state.count+ action.payload};
            break;
        default:
            return state;
            break;
    }
}
const initCart = {
    cart : []
}
export const cartReducer = (state = initCart,action)=>{
    switch (action.type) {
        case ADD_CART:
            let flag = false;
            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i].id==action.payload.id) {
                    state.cart[i].quantity++;
                    flag = true;
                    break;
                }
            }
            if (flag) {
                return {...state,cart:[...state.cart]};
            }
            else{
                return {...state,cart:[...state.cart,action.payload]};
            }
            break;
        case DEL_CART:
            if (state.cart[action.payload].quantity==1) {
                return {...state,cart:state.cart.filter(function (val, i) {
                    return action.payload != i;
                })};
                
            } else {//if there is more than 1 element from the product in the cart just reduce one of them
                state.cart[action.payload].quantity--;
                return {...state,cart:[...state.cart]};
            }
        default:
            return state;
            break;
    }
}