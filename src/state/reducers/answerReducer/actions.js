import { CHANGE_ANSWER, REMOVE_ANSWER, SET_ANSWERS } from "./types"

export const actionSetAnswers = (arr) => {
    return {
        type: SET_ANSWERS,
        payload: arr
    }
}

export const actionRemoveAnswer = (id) => {
    console.log(id);
    
    return {
        type: REMOVE_ANSWER,
        payload: id
        
    }
}
export const actionChangeAnswer = (id, text) => {
    console.log(text);
    
    return {
        type: CHANGE_ANSWER,
        payload: {
            id, text
        }
    }
}