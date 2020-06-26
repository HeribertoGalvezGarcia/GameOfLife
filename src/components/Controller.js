import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {generateGeneration, setRunning} from "../actions";

function Controller() {
  const [nodes, width, generation, running] = useSelector(({nodes, width, generation, running}) => [nodes, width, generation, running]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => dispatch(generateGeneration(nodes, width, generation)), 1000);

    return () => clearInterval(interval);
  }, [running, dispatch, generation, nodes, width]);

  return (
    <>
      {generation}
      <button onClick={() => dispatch(setRunning(!running))}>{running ? "Stop" : "Run"}</button>
    </>
  )
}

export default Controller;
