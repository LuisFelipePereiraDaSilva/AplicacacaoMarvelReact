import React from "react";
import styled from "styled-components";
import { Character } from "../../../types/character";
import { Comic } from "../../../types/comic";
import { Event } from "../../../types/event";
import { Storie } from "../../../types/storie";
import { Serie } from "../../../types/serie";
import { Creator } from "../../../types/creator";
import { theme } from "../../styles/theme";
import { Link } from "react-router-dom";
import { getId } from "../../functions";

const MainContainer = styled.div`
  margin-top: -20px;
`;

const Container = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
`;

const Text = styled.p`
  margin-top: 2px;
  font-size: 16px;
  flex: 1;
`;

const MoreDetails = styled.p`
  margin-top: 2px;
  font-size: 16px;
  color: ${theme.colors.textSecondary};
  margin-left: 10px;
`;

interface Props {
  title: string;
  list?: Character[] | Comic[] | Event[] | Storie[] | Serie[] | Creator[] | any;
}

const ListAux = (props: Props) => {
  const mountList = () => {
    let result = props.list?.map((item: any, index: number) => (
      <Container key={index}>
        <Text>{item.name}</Text>
        <Link to={clickMoreDetails(item.resourceURI)}>
          <MoreDetails>{"Mais detalhes"}</MoreDetails>
        </Link>
      </Container>
    ));
    return result;
  };

  const clickMoreDetails = (resourceURI: string) => {
    if (props.title === "Personagens") {
      return `DetailsCharacter/${getId(resourceURI)}`;
    } else if (props.title === "Quadrinhos") {
      return `DetailsComic/${getId(resourceURI)}`;
    } else if (props.title === "Criadores") {
      return `DetailsCreator/${getId(resourceURI)}`;
    } else if (props.title === "Eventos") {
      return `DetailsEvent/${getId(resourceURI)}`;
    } else if (props.title === "Histórias") {
      return `DetailsStorie/${getId(resourceURI)}`;
    } else if (props.title === "Séries") {
      return `DetailsSerie/${getId(resourceURI)}`;
    } else {
      return "";
    }
  };

  return (
    <MainContainer>
      <Title>{props.title}:</Title>
      {mountList()}
    </MainContainer>
  );
};

export default ListAux;
