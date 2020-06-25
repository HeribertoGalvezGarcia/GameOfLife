import React from "react";
import Node from "./Node";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {generateGeneration} from "../actions";

const StyledGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: ${({width_}) => `${width_*12}px`};
`;

function Grid() {
  const [width, nodes] = useSelector(({width, nodes}) => [width, nodes]);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(generateGeneration(nodes, width))}>Next Generation</button>
      <StyledGrid width_={width}>
        {nodes.map((_, i) => <Node key={i} index={i} />)}
      </StyledGrid>
    </>
  );
}

export default Grid;
