import * as types from './action-types'
import axios from 'axios'

const URL = 'http://localhost:9000/api/quiz/'
// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise(num) {
return {type: types.MOVE_CLOCKWISE, payload: num}
 }

export function moveCounterClockwise(num) {
  return {type: types.MOVE_COUNTERCLOCKWISE, payload: num}
 }

export function selectAnswer(id) { 
  return {type: types.SET_SELECTED_ANSWER, payload: id}
}

export function setMessage(name) { 
return ({ type: types.SET_INFO_MESSAGE, payload: name})
}

export function setQuiz(data) { 
  return ({type: types.SET_QUIZ_INTO_STATE, payload: data})
}

export function inputChange({ name, value }) {
  return {
    type: types.INPUT_CHANGE,
    payload: { name, value }
  }
}

export function resetForm() { 
  return({ type: types.RESET_FORM })
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
      axios.get(`${URL}next`)
      .then((result) => {
        dispatch({type: types.SET_QUIZ_INTO_STATE, payload: null})
        dispatch({type: types.SET_QUIZ_INTO_STATE, payload: result.data})
        
        })
      
         .catch(err => console.log(err))
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer(id, quizId) {
  return function (dispatch) {
    // On successful POST:
    axios.post(`${URL}answer`, {quiz_id: quizId, answer_id: id})
    .then((res) =>{
      dispatch({type: types.SET_SELECTED_ANSWER, payload: null})
      dispatch({type: types.SET_INFO_MESSAGE, payload: res.data.message})
      dispatch(fetchQuiz())
    })
    .catch(err => console.log({err}))
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz(news, trues, falses) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    axios.post(`${URL}new`, {question_text: news, true_answer_text: trues, false_answer_text: falses})
    .then((res) => {
      dispatch({type: types.SET_QUIZ_INTO_STATE, payload: res.data.data})
    })
    .catch(err => console.log(err))
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
