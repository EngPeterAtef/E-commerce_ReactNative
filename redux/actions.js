//ACTION TYPES
export const ADD = 'ADD';
export const SUB = 'SUB';
export const ADD_VAL = 'ADD_VAL';
export const ADD_CART = 'ADD_CART';
export const DEL_CART = 'DEL_CART';
export const RED_CART = 'RED_CART';
//ACTIONS
export const add = ()=>{
    return{
        type:ADD,
    }
};

export const sub = ()=>{
    return{
        type:SUB,
    }
};
export const addVal = (val)=>{
    return{
        type:ADD_VAL,
        payload:val,
    }
};

export const addCart = (newItem)=>{
    return {
        type:ADD_CART,
        payload:newItem
    }
}
export const delCart = (ind)=>{
    return {
        type:DEL_CART,
        payload:ind
    }
}