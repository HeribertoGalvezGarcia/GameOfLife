const SET_DIMENSIONS = 'SET_DIMENSIONS';
const SET_GRID = 'SET_GRID';
const SET_ALIVE = 'SET_ALIVE';
const GENERATE_GENERATION = 'GENERATE_GENERATION';
const SET_RUNNING = 'SET_RUNNING';

function setDimensions(height, width) {
  return {type: SET_DIMENSIONS, payload: {height, width, nodes: [...new Array(height * width)].map(() => false)}};
}

function setGrid(height, width, nodes) {
  return {type: SET_GRID, payload: {height, width, nodes}};
}

function setAlive(node, alive) {
  return {type: SET_ALIVE, payload: {node, alive}};
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

export {SET_DIMENSIONS, SET_GRID, SET_ALIVE, GENERATE_GENERATION, SET_RUNNING, setDimensions, setGrid, setAlive, generateGeneration, setRunning};
