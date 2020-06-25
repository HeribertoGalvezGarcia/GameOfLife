import {GENERATE_GENERATION, SET_DIMENSIONS, TOGGLE_ALIVE} from "../actions";

const height = 25;
const width = 25;

const initialState = {
  nodes: [...new Array(height * width)].map(() => false),
  height,
  width
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
