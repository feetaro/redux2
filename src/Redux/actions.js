import { v4 as uuidv4 } from "uuid";

export const INC_COUNTER = "INC_COUNTER";
export const DEC_COUNTER = "DEC_COUNTER";
export const ADD_TASK = "ADD_TASK";

export const incCounter = (payload) => {
  return {
    type: INC_COUNTER,
    payload
  };
};

export const decCounter = (payload) => {
  return {
    type: DEC_COUNTER,
    payload
  };
};

export const addTask = (payload) => {
  return {
    type: ADD_TASK,
    payload: {
      id: uuidv4(),
      title: payload,
      status: false
    }
  };
};
