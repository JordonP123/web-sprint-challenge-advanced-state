import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'

function Wheel(props) {

  const moveClockwise = () => {
    props.moveClockwise(1)
  }

  const moveCounterClockwise = () => {
    props.moveCounterClockwise(1)
  }

  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={props.wheel === 0 ? "cog active" : "cog"} style={{ "--i": 0 }}>{props.wheel === 0 ? 'B' : ''}</div>
        <div className={props.wheel === 1 ? "cog active" : "cog"} style={{ "--i": 1 }}>{props.wheel === 1 ? 'B' : ''}</div>
        <div className={props.wheel === 2 ? "cog active" : "cog"} style={{ "--i": 2 }}>{props.wheel === 2 ? 'B' : ''}</div>
        <div className={props.wheel === 3 ? "cog active" : "cog"} style={{ "--i": 3 }}>{props.wheel === 3 ? 'B' : ''}</div>
        <div className={props.wheel === 4 ? "cog active" : "cog"} style={{ "--i": 4 }}>{props.wheel === 4 ? 'B' : ''}</div>
        <div className={props.wheel === 5 ? "cog active" : "cog"} style={{ "--i": 5 }}>{props.wheel === 5 ? 'B' : ''}</div>
      </div>
      <div id="keypad">
        <button onClick={moveCounterClockwise} id="counterClockwiseBtn" >Counter clockwise</button>
        <button onClick={moveClockwise} id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}

export default connect(st => st, actions)(Wheel)
