import {GENERATE_GENERATION, SET_DIMENSIONS, SET_RUNNING, SET_ALIVE} from "../actions";

const height = 25;
const width = 25;

const initialState = {
  nodes: [...new Array(height * width)].map(() => false),
  height,
  width,
  generation: 0,
  running: false
};

function reducer(state = initialState, {type, payload}) {
  const newState = {...state};

  switch (type) {
    case SET_DIMENSIONS:
      newState.height = payload.height;
      newState.width = payload.width;
      newState.nodes = payload.nodes;
      return newState;
    case SET_ALIVE:
      newState.nodes[payload.node] = payload.alive;
      return newState;
    case GENERATE_GENERATION:
      newState.nodes = payload.nodes;
      newState.generation = payload.generation;
      return newState;
    case SET_RUNNING:
      newState.running = payload;
      return newState;
    default:
      return newState;
  }
}

export {initialState, reducer};
