import React from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {toggleAlive} from "../actions";

const StyledNode = styled.div`
  box-sizing: border-box;
  height: 10px;
  width: 10px;
  border: 1px solid grey;
  background-color: ${({alive}) => alive ? "black" : "white"};
`;

function Node({index}) {
  const alive = useSelector(({nodes}) => nodes[index]);
  const dispatch = useDispatch();

  return <StyledNode alive={alive} onClick={() => dispatch(toggleAlive(index))} />
}

export default Node;
