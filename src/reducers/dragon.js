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
                const { name, value } = action.payload;

                return {
                    ...state,
                    [name]: value, 
                    text : ''
                };
       
        case DEL_DRAGON:
            let registeredDragons = [...state.dragons];
        
            console.log('dragon delete');

            return {
                ...state,
                dragons: registeredDragons.filter(dragon=>dragon !== action.payload.dragon),
                dragon: '',
                message: ''
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