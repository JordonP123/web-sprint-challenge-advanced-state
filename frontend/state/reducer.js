// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import * as type from './action-types'

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch(action.type){
    case type.MOVE_CLOCKWISE: {
      return state >= 5 ? state = initialWheelState : state + action.payload
    }
    case type.MOVE_COUNTERCLOCKWISE: {
      return state <= 0 ? state = 5 : state - action.payload
    }
    default: return state
  }
}

const initialQuizState = []
function quiz(state = initialQuizState, action) {
  switch(action.type){
  case type.SET_QUIZ_INTO_STATE:{
  return {...state, state: action.payload}
  }
  default: return state
  }
}


const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type){
    case type.SET_SELECTED_ANSWER:
      return action.payload

      default: return state
  }
  
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch(action.type){
    case type.SET_INFO_MESSAGE:
      return action.payload
      default: return state
  }
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch(action.type){
    case type.INPUT_CHANGE: {
    const { name, value } = action.payload
      return {...state, [name]: value }
    }
    case type.RESET_FORM:{
      return state = initialFormState
    }
    default: return state
  }
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
