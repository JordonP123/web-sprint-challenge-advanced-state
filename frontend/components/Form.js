import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'

export function Form(props) {

  const onChange = evt => {
    const {name, value} = evt.target
    props.inputChange({name, value})

  }

  const onSubmit = evt => {
    evt.preventDefault()
    props.postQuiz(props.form.newQuestion, props.form.newTrueAnswer, props.form.newFalseAnswer)
    props.resetForm()
    props.setMessage(props.form.newQuestion)
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input name="newQuestion" value={props.form.newQuestion} maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input name="newTrueAnswer" value={props.form.newTrueAnswer} maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input name="newFalseAnswer" value={props.form.newFalseAnswer} maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button disabled={props.form.newQuestion === '' || props.form.newTrueAnswer === '' || props.form.newFalseAnswer === '' ? true : false} id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actions)(Form)
