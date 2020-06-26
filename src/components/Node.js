import React from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {setAlive} from "../actions";

const StyledNode = styled.div`
  box-sizing: border-box;
  height: 10px;
  width: 10px;
  border: 1px solid grey;
  background-color: ${({alive}) => alive ? "black" : "white"};
`;

function Node({index}) {
  const [alive, running] = useSelector(({nodes, running}) => [nodes[index], running]);
  const dispatch = useDispatch();

  return <StyledNode alive={alive} onClick={() => !running && dispatch(setAlive(index, !alive))} />
}

export default Node;
