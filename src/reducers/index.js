import {SET_DIMENSIONS} from "../actions";

const initialState = {
  nodes: [],
  height: 25,
  width: 25
};

function reducer(state = initialState, {type, payload}) {
  switch (type) {
    case SET_DIMENSIONS:
      return {...state, ...payload};
    default:
      return {...state};
  }
}

export {initialState, reducer};
