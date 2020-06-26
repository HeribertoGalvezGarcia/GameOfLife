import React from "react";
import Node from "./Node";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {generateGeneration} from "../actions";

const StyledGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: ${({width_}) => `${width_*10}px`};
`;

function Grid() {
  const [width, nodes, running] = useSelector(({width, nodes, running}) => [width, nodes, running]);
  const dispatch = useDispatch();

  return (
    <>
      <button disabled={running} onClick={() => dispatch(generateGeneration(nodes, width))}>Next Generation</button>
      <StyledGrid width_={width}>
        {nodes.map((_, i) => <Node key={i} index={i} />)}
      </StyledGrid>
    </>
  );
}

export default Grid;
