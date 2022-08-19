import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'

function Message(props) {


  return <div id="message">{props.quiz.state ? props.infoMessage : `Congrats: "${props.infoMessage}" is a great question!` }</div>
}

export default connect(st => st, actions)(Message)
