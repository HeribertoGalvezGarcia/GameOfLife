import React, {useState} from "react";
import styled from "styled-components";

const StyledNode = styled.div`
  box-sizing: border-box;
  height: 10px;
  width: 10px;
  margin: 1px;
  border: 1px solid black;
  background-color: ${({alive}) => alive ? "black" : "white"};
`;

function Node({x, y}) {
  const [alive, setAlive] = useState(false);
  return <StyledNode alive={alive} onClick={() => setAlive(!alive)} />
}

export default Node;
