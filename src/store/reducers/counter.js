import { DECREMENT, INCREMENT } from "../types/counter"

const initialState = {
  counter: 0
}

export const counterReducer = (state=initialState, action) => {
  switch(action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }
    default: return state
  }
}