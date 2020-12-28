import {INCREMENT} from '../constants/action';
let stateInit = {count: 0}

let reducerCount = (state = stateInit, action = {}) => {
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                count: state.count + 1,

            }

        default:
             return state;
    }
}
export default reducerCount;