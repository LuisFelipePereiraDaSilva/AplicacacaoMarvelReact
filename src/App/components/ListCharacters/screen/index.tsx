import React, { useEffect, useState } from "react";
import { getListCharacters } from "../../../services/requests/character/characterMarvel";
import ElementList from "../components/ElementList";
import { Character } from "../../../types/character";
import styled from "styled-components";
import FlatList from "flatlist-react";
import { useDispatch } from "react-redux";
import * as types from "../../../redux/types";
import MainDiv from "../../../shared/components/MainDiv";
import { getId, getWindowDimensions } from "../../../shared/functions";
import Title from "../../../shared/components/Title";

const List = styled.div`
  flex: 1;
`;

const ListPersonagens = () => {
  const dispatch = useDispatch();
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    dispatch({ type: types.SET_LOADING, payload: true });
    getListCharacters()
      .then((list) => {
        setCharacters(list);
      })
      .catch(() => {
        alert("Ocorreu um erro ao carregar os personagens");
      })
      .finally(() => {
        dispatch({ type: types.SET_LOADING, payload: false });
      });
  }, []);

  return (
    <>
      <MainDiv
        minHeight={getWindowDimensions().height}
        marginBottom={30}
        marginTop={0}
        marginLeft={30}
        marginRight={30}
      >
        <Title fontSize={40}>Personagens</Title>

        <List>
          <FlatList
            list={characters}
            renderItem={(item: Character, index: string) => (
              <ElementList
                key={index}
                name={item.name}
                image={item.image}
                id={getId(item.resourceURI)}
              />
            )}
            renderWhenEmpty={() => <div>Lista vazia</div>}
            displayGrid
          />
        </List>
      </MainDiv>
    </>
  );
};

export default ListPersonagens;
