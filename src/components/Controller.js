import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {generateGeneration, setRunning, setGrid} from "../actions";

function Controller() {
  const [nodes, width, generation, running] = useSelector(({nodes, width, generation, running}) => [nodes, width, generation, running]);
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

      <select onChange={({target: {value}}) => dispatch(setGrid(...presets[value].slice(1)))}>
        {presets.map(([name], i) => <option value={i} key={i}>{name}</option>)}
      </select>

      <button onClick={() => dispatch(setRunning(!running))}>{running ? "Stop" : "Run"}</button>
    </>
  )
}

export default Controller;
