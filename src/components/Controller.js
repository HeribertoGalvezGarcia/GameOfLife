import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {generateGeneration, setRunning, setGrid, setDimensions} from "../actions";

function Controller() {
  const [nodes, height, width, generation, running] = useSelector(({nodes, height, width, generation, running}) => [nodes, height, width, generation, running]);
  const dispatch = useDispatch();

  const presets = [
    ['Block', 4, 4, [false, false, false, false, false, true, true, false, false, true, true, false, false, false, false, false]],
    ['Beehive', 5, 6, [false, false, false, false, false, false, false, false, true, true, false, false, false, true, false, false, true, false, false, false, true, true, false, false, false, false, false, false, false, false]],
    ['Loaf', 6, 6, [false, false, false, false, false, false, false, false, true, true, false, false, false, true, false, false, true, false, false, false, true, false, true, false, false, false, false, true, false, false, false, false, false, false, false, false]],
    ['Boat', 5, 5, [false, false, false, false, false, false, true, true, false, false, false, true, false, true, false, false, false, true, false, false, false, false, false, false, false]],
    ['Tub', 5, 5, [false, false, false, false, false, false, false, true, false, false, false, true, false, true, false, false, false, true, false, false, false, false, false, false, false]]
  ];

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => dispatch(generateGeneration(nodes, width, generation)), 1000);

    return () => clearInterval(interval);
  }, [running, dispatch, generation, nodes, width]);

  return (
    <>
      {generation}

      <input type="text" placeholder="height" value={height} onChange={({target: {value}}) => dispatch(setDimensions(value, width))} />
      <input type="text" placeholder="width" value={width} onChange={({target: {value}}) => dispatch(setDimensions(height, value))} />

      <select onChange={({target: {value}}) => dispatch(setGrid(...presets[value].slice(1)))}>
        {presets.map(([name], i) => <option value={i} key={i}>{name}</option>)}
      </select>

      <button onClick={() => dispatch(setRunning(!running))}>{running ? "Stop" : "Run"}</button>
    </>
  )
}

export default Controller;
