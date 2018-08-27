import * as types from '../constants/ActionType';
import * as msg from '../constants/Message';


let initialState = msg.MSG_WELCOME;
const message = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_MES:
        state=action.mes;
        return state;
        default:
            return state;
    }
}
export default message;