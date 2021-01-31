import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

const MainDiv = styled.div`
  width: 200px;
  height: 210px;
  border-radius: 10px;
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

const Text = styled.p`
  font-size: 18px;
  margin-top: 10px;
  font-weight: bold;
  text-align: center;
`;

const Button = styled(Link)`
  align-items: center;
  justify-content: center;
  display: flex;
`;

interface Props {
  name: string;
  image?: string;
  id: string;
}

const ElementList = (props: Props) => {
  return (
    <Button to={`DetailsCharacter/${props.id}`}>
      <MainDiv>
        <Image
          src={
            props.image
              ? props.image
              : "https://triunfo.pe.gov.br/pm_tr430/wp-content/uploads/2018/03/sem-foto.jpg"
          }
          alt={"Não foi possível carregar a imagem!"}
        />
        <Text>{props.name}</Text>
      </MainDiv>
    </Button>
  );
};

export default ElementList;
