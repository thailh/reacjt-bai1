import * as types from './../constants/ActionType';
import {filter,includes,remove,orderBy as functionOderby} from 'lodash';
const uuidv1 = require('uuid/v4');
var data = JSON.parse(localStorage.getItem('CART'));
let initialState = data ? data : [];
const cart = (state = initialState, action) => {
    let { product, quantity } = action;
    switch (action.type) {

        case types.ADD_TO_CARD:
            let item = {
                product,
                quantity
            }
            let bl = false;
            state.forEach(
                (elm, key) => {
                    if (elm.product.id == product.id) {
                        state[key].quantity +=1;
                        bl=true;
                    }
                }
            )
            if(bl==false)
            {
                state.push(item);
            }
           
            localStorage.setItem("CART", JSON.stringify(state));
            return [...state];
        case types.REMOVE_CARD:
                 remove(state,(item)=>{
                    return item.product.id==action.cartid
                    })
                    localStorage.setItem('tasks',JSON.stringify(state));
                    return [...state];
        case types.ADD_OR_REMOVE:
        let{cart,number}=action;
        state.forEach(
            (elm, key) => {
                if (elm.product.id == cart.product.id ) {
                    state[key].quantity +=number;
                    bl=true;
                }
            }
        )
        localStorage.setItem('tasks',JSON.stringify(state));
        return [...state];
        
        default:
            return [...state];
    }
}
export default cart;