import React, { useEffect, useState } from "react";
//import { NavigationContainerRef } from "@react-navigation/native";
import styled from "styled-components";
import { getWindowDimensions } from "./Dimensions";

const MainView = styled.div`
  flex: 1;
  height: 100%;
  width: ${getWindowDimensions().width}px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Text = styled.text`
  font-size: 40px;
  font-weight: bold;
`;

const Loading = () => {
  console.log(getWindowDimensions().height);
  return (
    <>
      <MainView>
        <Text>Carregando...</Text>
      </MainView>
    </>
  );
};

export default Loading;
