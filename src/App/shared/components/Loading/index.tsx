import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  position: absolute;
  background-color: #fff;
`;

const Text = styled.p`
  font-size: 40px;
  font-weight: bold;
`;

const Loading = () => {
  return (
    <>
      <MainDiv>
        <Text>Carregando...</Text>
      </MainDiv>
    </>
  );
};

export default Loading;
