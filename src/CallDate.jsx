import React from "react";

const CallDate = ({ date }) => {
  const baseDate = new Date(date);
  const monthArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthArray[baseDate.getMonth()].toUpperCase();
  const day = baseDate.getDay();
  const year = baseDate.getFullYear();

  return (
    <div>
      {month}, {day}, {year}
    </div>
  );
};

export default CallDate;
