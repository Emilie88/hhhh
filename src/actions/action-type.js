import { ON_CHANGE, ADD_QUESTION,ADD_DRAGON,SET_DRAGON,DEL_DRAGON,REVERSE_DRAGONS,ADD_CHEVALIER,SET_CHEVALIER,DEL_CHEVALIER,REVERSE_CHEVALIER, INCREMENT } from '../constants/action';

export const set_question = payload => {

    return {
        type: ON_CHANGE, payload
    }
}

export const add_question = () => {

    return {
        type: ADD_QUESTION,
    }
}

export const add_dragon = payload => {
    return {
        type: ADD_DRAGON, payload
    }
};

export const set_dragon = payload => {

    return {
        type: SET_DRAGON, payload
    }
}
export const del_dragon = payload => {

    return {
        type: DEL_DRAGON, payload
    }
}

export const reverse_dragons = () => {

    return {
        type: REVERSE_DRAGONS,
    }
}

export const add_chevalier = payload => {
    return {
        type: ADD_CHEVALIER, payload
    }
};

export const set_chevalier = payload => {

    return {
        type: SET_CHEVALIER, payload
    }
}

export const del_chevalier = payload => {

    return {
        type: DEL_CHEVALIER, payload
    }
}

export const reverse_chevalier = () => {

    return {
        type: REVERSE_CHEVALIER,
    }
}
export const increment = payload=>{
    return {
        type: INCREMENT, payload
    }
  
}