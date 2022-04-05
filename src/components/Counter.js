import React from "react";
import { connect } from "react-redux";
import { incCounter, decCounter } from "../Redux/actions";

const Counter = (props) => {
  const { counter, incCounter, decCounter } = props;
  return (
    <>
      <h3>{counter}</h3>
      <button onClick={() => incCounter()}>add</button>
      <button onClick={() => decCounter()}>reduce</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return { counter: state.counter };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incCounter: () => dispatch(incCounter(1)),
    decCounter: () => dispatch(decCounter(1))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
