import { CHANGE_ANSWER, REMOVE_ANSWER, SET_ANSWERS } from "./types";

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
        case CHANGE_ANSWER:
            return state.map(item => 
                item.id === action.payload.id 
                ? {...item, scientist: action.payload.text}
                : item
            )
        default: return state
    }
}