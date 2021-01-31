import React, { useEffect, useState } from "react";
//import { NavigationContainerRef } from "@react-navigation/native";
import styled from "styled-components";
import { getWindowDimensions } from "../Dimensions";

const MainView = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  position: absolute;
  background-color: #fff;
`;

const Text = styled.text`
  font-size: 40px;
  font-weight: bold;
`;

const Loading = () => {
  return (
    <>
      <MainView>
        <Text>Carregando...</Text>
      </MainView>
    </>
  );
};

export default Loading;
