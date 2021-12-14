import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 10px;
  div {
    width: 100px;
    text-align: center;
    border: 1px solid gray;
    border-radius: 10px;
    &:hover {
      background-color: grey;
      color: white;
      cursor: pointer;
    }
  }
`;
const Archive = styled.div``;
const Feed = styled.div``;
const TLink = styled(Link)`
  all: unset;
`;

const Tab = () => {
  return (
    <Container>
      <TLink to={"/archive"}>
        <Archive>Archive</Archive>
      </TLink>
      <TLink to={"/feed"}>
        <Feed>Feed</Feed>
      </TLink>
    </Container>
  );
};

export default Tab;
