import { ADD_DRAGON,SET_DRAGON,REVERSE_DRAGONS,DEL_DRAGON } from '../constants/action';

let stateInit = {
    dragons: [
        "Apalala",
        "Balaur",
        "Bolla"],
    number: 3,
    dragon:"",
    text: ''
}

let reducerDragon = (state = stateInit, action = {}) => {
    switch (action.type) {
        case ADD_DRAGON:
                if(state.dragon.trim() === ''){

                    return {
                        ...state,
                        text : "Attention votre champ est vide"
                    }
                }
              return {
                ...state,
                dragons: state.dragons.concat(state.dragon),
                number: state.number + 1,
                text : 'Merci pour votre proposition',
                dragon : ''
              }
        case SET_DRAGON:
                const { value } = action.payload;

                return {
                    ...state,
                    dragon: value, 
                    text : ''
                };
       
        case DEL_DRAGON:
            let listDragons = [...state.dragons];

            return {
                ...state,
                dragons: listDragons.filter(dragon=>dragon !== action.payload.dragon),
                dragon: '',
                text: ''
            };

        case REVERSE_DRAGONS:
            let dragonsList = [...state.dragons];

            return {
                ...state,
                dragons: dragonsList.reverse(),
                dragon: '',
                message: ''
            };
        default:
            return state;
    }
   
}
export default reducerDragon;