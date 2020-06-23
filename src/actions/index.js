const SET_DIMENSIONS = 'SET_DIMENSIONS';

function setDimensions(height, width) {
  return {type: SET_DIMENSIONS, payload: {height, width}};
}

export {SET_DIMENSIONS, setDimensions};
