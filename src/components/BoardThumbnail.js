import React from "react";
import styled from "styled-components";

const Thumbnail = styled.div`
  height: 280px;
  width: 280px;
  background: #efefef;
  padding: 10px;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 6px;
  box-shadow: 0 2px 4px grey;
`;

const Title = styled.h4`
  color: #333;
  text-decoration: none;
  font-family: Roboto, sans-serif;
  font-weight: 500;
`;

const BoardThumbnail = ({ title }) => {
  console.log(title);
  return (
    <Thumbnail>
      <Title>{title}</Title>
    </Thumbnail>
  );
};

export default BoardThumbnail;
