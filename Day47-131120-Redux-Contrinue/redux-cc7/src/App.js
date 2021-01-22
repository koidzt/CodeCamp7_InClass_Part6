import { useState } from 'react';
import { connect } from 'react-redux';
import { addSpecialResult } from './store/action';
import './App.css';
import Counter from './containers/Counter/Counter';
import ResultList from './containers/ResultList/ResultList';


function App(props) {
  const [counterVisible, setCounterVisible] = useState(true);
  const [resultListVisible, setResultListVisible] = useState(true);

  return (
    <div className="App">
      <button className="headButton" onClick={() => { setCounterVisible(!counterVisible) }}>
        COUNTER<br></br>{counterVisible ? "ON" : "OFF"}</button>
      <button className="headButton" onClick={() => { setResultListVisible(!resultListVisible) }}>
        RESULT LIST<br></br>{resultListVisible ? "ON" : "OFF"}</button>
      <button className="headButton" onClick={() => props.onAddSpecial()}>
        ADD SPECIAL RESULT</button>
      {counterVisible ? <Counter /> : null}
      {resultListVisible ? <ResultList /> : null}
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onAddSpecial: () => dispatch(addSpecialResult())
  };
};

export default connect(null, mapDispatchToProps)(App);
