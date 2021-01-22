import React from 'react';
import './CounterPanel.css';
import { connect } from 'react-redux';

function CounterPanel(props) {
  return (
    <div>
      <button
        onClick={props.onIncrementCounter}
        className="button-codecamp">INCREASE</button>
      <button
        onClick={props.onDecrementCounter}
        className="button-codecamp">DECREASE</button>
      <button
        onClick={() => props.onAddCounter(10)}
        className="button-codecamp">ADD 10</button>
      <button
        onClick={() => props.onSubtractCounter(10)}
        className="button-codecamp">SUBTRACT 10</button>
      <button
        onClick={props.onResetCounter}
        className="button-codecamp">RESET</button>
    </div >
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREASE" }),
    onDecrementCounter: () => dispatch({ type: "DECREASE" }),
    onAddCounter: (value) => dispatch({ type: "ADD", value }),
    onSubtractCounter: (value) => dispatch({ type: "SUBTRACT", value }),
    onResetCounter: () => dispatch({ type: "RESET" }),
  };
};

export default connect(null, mapDispatchToProps)(CounterPanel);
