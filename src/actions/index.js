const SET_DIMENSIONS = 'SET_DIMENSIONS';
const TOGGLE_ALIVE = 'TOGGLE_ALIVE';

function setDimensions(height, width) {
  return {type: SET_DIMENSIONS, payload: {height, width}};
}

function toggleAlive(nodeId) {
  return {type: TOGGLE_ALIVE, payload: nodeId}
}

export {SET_DIMENSIONS, TOGGLE_ALIVE, setDimensions, toggleAlive};
