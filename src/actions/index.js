import * as types from './../constants/ActionType';
export const actAddToCart =(product,quantity)=>{
    return{
        type:types.ADD_TO_CARD,
        product:product,
        quantity:quantity,
    }
}
export const DeleteItem=(cartid)=>{
    console.log("const DeleteItem: "+cartid)
    return{
        type: types.REMOVE_CARD,
        cartid: cartid
    }
}
export const AddorRemove =(cart,number)=>
{
    return {
        type: types.ADD_OR_REMOVE,
        cart:cart,
        number:number
    }
}
export const ChangeMessage=(mes)=>{
    return {
        type: types.CHANGE_MES,
        mes:mes
    }
}