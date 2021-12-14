import React, { useState, useEffect } from "react";
import CallBox from "./CallBox.jsx";
import styled from "styled-components";

const Container = styled.div``;
const Calls = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`;

const Feed = () => {
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchFeed = () => {
      fetch("https://aircall-job.herokuapp.com/activities")
        .then((res) => res.json())
        .then((res) => {
          setFeed(res.filter((res) => !res.is_archived));
          setLoading(false);
        });
    };

    fetchFeed();
  }, []);

  return (
    <Container>
      <Calls>
        {feed && !loading
          ? feed.map((res) => (
              <CallBox
                key={res.id}
                to={res.to}
                from={res.from}
                time={res.created_at}
                bound={res.bound}
              />
            ))
          : null}
      </Calls>
    </Container>
  );
};

export default Feed;
