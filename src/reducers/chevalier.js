import { ADD_CHEVALIER,SET_CHEVALIER,DEL_CHEVALIER,REVERSE_CHEVALIER } from '../constants/action';

let stateInit = {
    chevaliers: [
        "D'Artagnan",
        "Atos",
        "Portos"],
    count: 3,
    chevalier:"",
    message: ''
}

let reducerChevalier = (state = stateInit, action = {}) => {
    switch (action.type) {
        case ADD_CHEVALIER:
                if(state.chevalier.trim() === ''){

                    return {
                        ...state,
                        message : "Attention votre champ est vide"
                    }
                }
              return {
                ...state,
                chevaliers: state.chevaliers.concat(state.chevalier),
                count: state.count + 1,
                message : 'Merci pour votre proposition',
                chevalier : ''
              }
        case SET_CHEVALIER:
                const { value } = action.payload;

                return {
                    ...state,
                    chevalier: value, 
                    message : ''
                };
        case DEL_CHEVALIER:
            let listChevaliers = [...state.chevaliers];

            return {
                ...state,
                chevaliers: listChevaliers.filter(chevalier=>chevalier !== action.payload.chevalier),
                chevalier: '',
                message: '',
                count: state.count - 1
            };

        case REVERSE_CHEVALIER:
            let dragonsList = [...state.chevaliers];

            return {
                ...state,
                chevaliers: dragonsList.reverse(),
                chevalier: '',
                message: ''
            };
       
    
        default:
            return state;
    }
   
}
export default reducerChevalier;