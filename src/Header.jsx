import React from "react";
import styled from "styled-components";
import Tab from "./Tab.jsx";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Baloo Bhaijaan 2", cursive;
  font-size: 1.2em;
`;
const LogoContainer = styled.div`
  margin-left: 10px;
`;

const Header = () => {
  return <Container>This is Header</Container>;
};

export default Header;
