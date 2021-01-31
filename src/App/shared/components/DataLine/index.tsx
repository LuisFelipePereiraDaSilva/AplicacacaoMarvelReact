import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex-direction: row;
  margin-top: -20px;
  display: flex;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
`;

const Text = styled.p`
  font-size: 18px;
  flex: 1;
`;

interface Props {
  title: string;
  text?: string;
}

const DataLine = (props: Props) => {
  return (
    <Container>
      <Title>{props.title}:</Title>
      <Text>{props.text ? props.text : ""}</Text>
    </Container>
  );
};

export default DataLine;
