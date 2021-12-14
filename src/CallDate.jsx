import React from "react";

const CallDate = ({ date, detail }) => {
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
  const month = monthArray[baseDate.getMonth()];
  const day = baseDate.getDay();
  const year = baseDate.getFullYear();
  const hour = baseDate.getHours();
  const min = baseDate.getMinutes();

  return (
    <div>
      {detail ? (
        <div>
          <div>
            {year} {month} {day}
          </div>
          <div>
            {hour}:{min}
          </div>
        </div>
      ) : (
        <div>
          {month.toUpperCase()}, {day}, {year}
        </div>
      )}
    </div>
  );
};

export default CallDate;
