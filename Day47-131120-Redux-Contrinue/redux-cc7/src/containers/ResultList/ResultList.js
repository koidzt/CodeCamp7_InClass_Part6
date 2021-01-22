import { uniqueId } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { deleteResult, storeResult } from '../../store/action';

function ResultList(props) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      margin: "0px"
    }}>
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        {props.rl.map(({ id, result }, idx) => <li key={idx} style={{ justifyContent: "center" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "150px", margin: "0px" }}>
            <p style={{ fontSize: "26px", margin: "0" }}>{result}</p>
            <button
              onClick={() => props.onDelete(id)}
              style={{
                fontSize: "16px",
                color: "black",
                margin: "0",
                border: "3px solid brown",
                borderRadius: "5px",
                backgroundColor: "lightsalmon"
              }}
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
    rl: state.rsCombine.resultList,
    ctr: state.crtCombine.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAdd: (value) => dispatch(storeResult(value)),
    onDelete: (id) => dispatch(deleteResult(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultList);
