import React, { useEffect } from "react";

import styled from "styled-components";
import { getWindowDimensions } from "../../../../shared/components/Dimensions";

const MainView = styled.div`
  width: 200px;
  height: 210px;
  border-radius: 10px;
  margin-horizontal: 5px;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 5px;
  flex-direction: column;
  box-shadow: 5px 5px 5px 5px #696969;
`;

const Image = styled.img`
  margin-top: 10px;
  height: 150px;
  width: 140px;
  object-fit: cover;
`;

const Text = styled.text`
  font-size: 18px;
  margin-top: 10px;
  font-weight: bold;
  text-align: center;
`;

const Button = styled.button`
  border: none !important;
  background-color: white !important;
  align-items: center;
  justify-content: center;
  display: flex;
  outline: none;
  cursor: pointer;
`;

interface Props {
  name: string;
  image?: string;
}

const ElementList = (props: Props) => {
  return (
    <>
      <Button>
        <MainView>
          <Image
            src={
              props.image
                ? props.image
                : "https://triunfo.pe.gov.br/pm_tr430/wp-content/uploads/2018/03/sem-foto.jpg"
            }
            alt={"Não foi possível carregar a imagem!"}
          />
          <Text>{props.name}</Text>
        </MainView>
      </Button>
    </>
  );
};

export default ElementList;
