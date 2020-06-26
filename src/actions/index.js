const SET_DIMENSIONS = 'SET_DIMENSIONS';
const TOGGLE_ALIVE = 'TOGGLE_ALIVE';
const GENERATE_GENERATION = 'GENERATE_GENERATION';
const SET_RUNNING = 'SET_RUNNING';

function setDimensions(height, width) {
  return {type: SET_DIMENSIONS, payload: {height, width}};
}

function toggleAlive(nodeId) {
  return {type: TOGGLE_ALIVE, payload: nodeId}
}

function generateGeneration(nodes, width, generation) {
  const newNodes = [];

  for (let i = 0; i < nodes.length; ++i) {
    let aliveNeighbors = 0;

    const node = nodes[i];

    const hasLeft = i % width !== 0;
    const hasRight = (i + 1) % width !== 0;
    const hasTop = i - width >= 0;
    const hasBottom = i + width < nodes.length;

    if (hasTop) {
      if (hasLeft && nodes[i-width-1] === true) ++aliveNeighbors;
      if (nodes[i-width] === true) ++aliveNeighbors;
      if (hasRight && nodes[i-width+1] === true) ++aliveNeighbors;
    }

    if (hasLeft && nodes[i-1] === true) ++aliveNeighbors;
    if (hasRight && nodes[i+1] === true) ++aliveNeighbors;

    if (hasBottom) {

      if (hasLeft && nodes[i+width-1] === true) ++aliveNeighbors;
      if (nodes[i+width] === true) ++aliveNeighbors;
      if (hasRight && nodes[i+width+1] === true) ++aliveNeighbors;
    }

    newNodes.push(node ? [2, 3].includes(aliveNeighbors) : aliveNeighbors === 3);
  }

  return {type: GENERATE_GENERATION, payload: {nodes: newNodes, generation: generation+1}};
}

function setRunning(running) {
  return {type: SET_RUNNING, payload: running};
}

export {SET_DIMENSIONS, TOGGLE_ALIVE, GENERATE_GENERATION, SET_RUNNING, setDimensions, toggleAlive, generateGeneration, setRunning};
