import React from "react";
import Node from "./Node";
import styled from "styled-components";
import {useSelector} from "react-redux";

const StyledGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: ${({width_}) => `${width_*12}px`};
`;

function Grid() {
  const [height, width] = useSelector(({height, width}) => [height, width]);

  const nodes = [...new Array(height * width).keys()].map(i => <Node key={i} index={i} />);

  return (
    <StyledGrid width_={width}>
      {nodes}
    </StyledGrid>
  );
}

export default Grid;
