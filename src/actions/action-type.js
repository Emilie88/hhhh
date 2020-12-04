import { ON_CHANGE, ADD_QUESTION,ADD_DRAGON,SET_DRAGON,DEL_DRAGON,REVERSE_DRAGONS } from '../constants/action';

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