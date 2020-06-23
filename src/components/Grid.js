import React from "react";
import Node from "./Node";
import styled from "styled-components";

const StyledGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: ${({width}) => `${width*14}px`};
`;

function Grid({height, width}) {
  const nodes = [];

  for (let x = 0; x < width; ++x) {
    for (let y = 0; y < height; ++y) nodes.push(<Node x={x} y={y} />)
  }

  return (
    <StyledGrid width={width}>
      {nodes}
    </StyledGrid>
  );
}

export default Grid;
