import React from 'react';
import { connect } from 'react-redux';

function ResultList(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <br></br>
      <button
        onClick={() => props.onAdd(props.ctr)}
        style={{
          width: "15em",
          height: "2.5em",
          fontSize: "1.25em",
          color: "lightyellow",
          backgroundColor: "brown",
          borderRadius: "5px",
        }}
      >Store current counter</button>
      <h1>These are results you saved.</h1>
      <ul style={{
        width: "123px",
        margin: "0 auto",
        fontSize: "23px",
        fontWeight: "bold",
        listStyleType: "disc",
        color: "brown",
        margin: "0px auto"
      }}>
        {props.rl.map(({ id, result }) => <li key={id} style={{ justifyContent: "center" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "300px" }}>
            <p>{result}</p>
            <button
              onClick={() => props.onDelete(id)}
            >
              DELETE</button>
          </div>
        </li>)}
      </ul>
    </div >
  );
};

const mapStateToProps = state => {
  return {
    rl: state.resultList,
    ctr: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAdd: (value) => dispatch({ type: "STORE_RESULT", counter: value }),
    onDelete: (id) => dispatch({ type: "DELETE_RESULT", id })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultList);
