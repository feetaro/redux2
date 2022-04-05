import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../Redux/actions";

const Todo = (props) => {
  const { todo, addTask } = props;
  const [task, setTask] = useState("");

  return (
    <>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={() => addTask(task)}>Add Task</button>
      <div>
        {todo.map((item) => (
          <h5>{item.title}</h5>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  todo: state.todo
});

const mapDispatchToProps = (dispatch) => ({
  addTask: (payload) => dispatch(addTask(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
