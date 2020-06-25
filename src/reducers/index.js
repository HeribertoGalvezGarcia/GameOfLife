import {GENERATE_GENERATION, SET_DIMENSIONS, TOGGLE_ALIVE} from "../actions";

const initialState = {
  nodes: [false, false, false, false],
  height: 2,
  width: 2
};

function reducer(state = initialState, {type, payload}) {
  const newState = {...state};

  switch (type) {
    case SET_DIMENSIONS:
      newState.height = payload.height;
      newState.width = payload.width;
      newState.nodes = [...new Array(payload.height * payload.width)].map(() => false);
      return {...state, ...payload};
    case TOGGLE_ALIVE:
      newState.nodes[payload] = !newState.nodes[payload];
      return newState;
    case GENERATE_GENERATION:
      newState.nodes = payload;
      return newState;
    default:
      return newState;
  }
}

export {initialState, reducer};
