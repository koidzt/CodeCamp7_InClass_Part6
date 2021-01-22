import React from 'react';
import './CounterPanel.css';
import { connect } from 'react-redux';
import { add, decrement, increment, reset, subtract } from '../../store/action';

function CounterPanel(props) {
  return (
    <div>
      <button
        onClick={props.onIncrementCounter}
        className="button-codecamp">INCREMENT</button>
      <button
        onClick={props.onDecrementCounter}
        className="button-codecamp">DECREMENT</button>
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
    onIncrementCounter: () => dispatch(increment()),
    onDecrementCounter: () => dispatch(decrement()),
    onAddCounter: (value) => dispatch(add(value)),
    onSubtractCounter: (value) => dispatch(subtract(value)),
    onResetCounter: () => dispatch(reset()),
  };
};

export default connect(null, mapDispatchToProps)(CounterPanel);
