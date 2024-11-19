import { REMOVE_ANSWER, SET_ANSWERS } from "./types";

export const answerReducer = (state = [], action) => {
    switch (action.type) {
        case SET_ANSWERS:
            return action.payload
        case REMOVE_ANSWER:
            return state.map(item => 
                item.id === action.payload
                    ? { ...item, scientist: null } // Удаляем поле name
                    : item
            );
        default: return state
    }
}