import {combineReducers} from 'redux';
import pproduct from './Rproduct';
import cart from './cart';
import message from './message';
const appReducers=combineReducers({
 products:pproduct,
 cart:cart,
 message:message
})
export default appReducers;