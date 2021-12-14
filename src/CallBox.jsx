import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  display: flex;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 10px;
  column-gap: 10px;
  align-items: center;
`;
const Image = styled.div`
  background-color: red;
  width: 30px;
  height: 30px;
`;
const CallInfo = styled.div`
  width: 150px;
`;
const To = styled.div`
  font-size: 0.8em;
`;
const From = styled.div`
  font-weight: bold;
  font-size: 1.1em;
`;
const Time = styled.div``;
const Meridiem = styled.div`
  padding: 3px;
  font-size: 0.8em;
  border: 0.3px solid gray;
  /* height: 20px;
  width 28px; */
  text-align: center;
  border-radius: 3px;
`;

const CallBox = ({ to = "undefined", from, time, bound }) => {
  let hour = new Date(time).getHours();
  const min = new Date(time).getMinutes();
  const dayOrNight = hour >= 12 ? "PM" : "AM";
  if (hour > 12) hour -= 12;
  const tried = to ? to.split(" ") : null;

  return (
    <Container>
      <Image />
      <CallInfo>
        <From>{from.length > 15 ? `${from.slice(0, 14)}...` : from}</From>
        <To>tried to call on {tried ? tried[0] : "undefined"}</To>
      </CallInfo>
      <Time>
        {hour}:{min}
      </Time>
      <Meridiem>{dayOrNight}</Meridiem>
    </Container>
  );
};

export default CallBox;
